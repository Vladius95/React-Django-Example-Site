// Singleton
export class Store 
{
  private static _instance: Store;

  constructor()
  {
    if (Store._instance)
    {
      throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new');
    }
    else
    {
      Store._instance = this;
    }
  }

  static getInstance(): any
  {
    if (!Store._instance) {
      this._instance = new this();
    }
    this._instance.load();
    return this._instance;
  }

  load() {}
}