// ==================================================
// == DEPENDANCIES - imports
// ==================================================
/**
 * @class NeedEntity
 * @description This define the Project Need entity model
 * @version 1.0.0 Initial version
 */
class NeedEntity {
  // PROPERTIES
  private _id: string;
  private _title: string;
  private _description: string;
  private _completed: boolean;
  // CONSTRUCTOR
  constructor({
    id = 'emptyNeed',
    title = '',
    description = '',
    completed = false,
  }: {
    id?: string;
    title?: string;
    description?: string;
    completed?: boolean;
  } = {}) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._completed = completed;
  }
  // GETTERS / SETTERS
  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public set completed(completed: boolean) {
    this._completed = completed;
  }
}

export default NeedEntity;
