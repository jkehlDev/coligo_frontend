// ==================================================
// == DEPENDANCIES - imports
// ==================================================
/**
 * @class AuthorEntity
 * @description This define the Author entity model
 * @version 1.0.0 Initial version
 */
class AuthorEntity {
  // PROPERTIES
  private _id: string;
  private _name: string;
  // CONSTRUCTOR
  constructor({
    id = 'emptyAuthor',
    name = '',
  }: {
    id?: string;
    name?: string;
  } = {}) {
    this._id = id;
    this._name = name;
  }
  // GETTERS / SETTERS
  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
}
export default AuthorEntity;
