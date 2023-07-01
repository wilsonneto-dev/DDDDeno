class Injectosaurus {
  private dependencies: Map<any, any> = new Map();

  register(token: any, dependency: any): void {
    this.dependencies.set(token, dependency);
  }

  resolve<Type>(token: string): Type {
    const dependency = this.dependencies.get(token);
    if (!dependency) {
      throw new Error(`Dependency not found for token: ${token.toString()}`);
    }
    if (typeof dependency === "function") {
      const dependencies = this.getDependenciesTokens(dependency);
      const resolvedDependencies = dependencies.map((dep: any) => {
        return this.resolve(dep)
      });
      return new dependency(...resolvedDependencies);
    }
    return dependency;
  }

  private getDependenciesTokens(fn: any): any[] {
    const dependencies: any[] = [];
    const parameterTypes = fn.__dependencies__ || [];
    return parameterTypes;
  }
}

function Inject(token: any): ParameterDecorator {
  return (target: any, propertyKey: string | symbol, parameterIndex: number) => {
    if (!target.__dependencies__) {
      target.__dependencies__ = [];
    }
    target.__dependencies__[parameterIndex] = token;
  };
}

export { Inject, Injectosaurus }
