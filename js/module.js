const isStandaloneModuleMode = () => Boolean(window.ABSHER_STANDALONE_MODE);

async function loadPortalModule(config, rebuild = false) {
  if (!config || !config.moduleName) {
    return;
  }

  if (isStandaloneModuleMode()) {
    if (typeof window.showStandaloneNotice === "function") {
      window.showStandaloneNotice("Dynamic portal modules are disabled in the local standalone preview.");
    }
    return;
  }

  const path = "/portal/individuals/assets/" + module + config.moduleName + "/" + config.moduleName + ".js?v=" + moduleVersion;
  const absolutePath = "/portal/individuals/assets/" + module + config.moduleName + "/";

  try {
    const { default: defaultImport } = await import(path);
    defaultImport(
      config.moduleName,
      config.param,
      absolutePath,
      config.json,
      config.action,
      rebuild ? "rebuild" : undefined
    );
  } catch (error) {
    console.warn("Standalone module loader skipped external portal module:", config.moduleName, error);
  }
}

window.Import = async (funcarg) => {
  for (const arg of funcarg || []) {
    let collector = 0;

    parentfunctionName.filter((val) => {
      if (val.funcname == arg.moduleName) {
        collector = 1;
      }
    });

    if (collector === 0) {
      parentfunctionName.push(arg);
      myparent.push(JSON.parse(JSON.stringify(arg)));
    }

    await loadPortalModule(arg, false);
  }
};

window.func = async (funcarg) => {
  parentfunctionName.filter((val, index) => {
    if (funcarg.moduleName == val.moduleName) {
      parentfunctionName.splice(index, 1);
      parentfunctionName.push(funcarg);
    }
  });

  const clonedConfig = JSON.parse(JSON.stringify(funcarg));
  await loadPortalModule(clonedConfig, true);
};
