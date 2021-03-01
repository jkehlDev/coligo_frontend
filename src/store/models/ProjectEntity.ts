// ==================================================
// == DEPENDANCIES - imports
import AuthorEntity from './AuthorEntity';
import NeedsEntity from './NeedEntity';
import ProjectStatesEnum from './ProjectStatesEnum';
// ==================================================
/**
 * @class ProjectEntity
 * @description This define the Project entity model
 * @version 1.0.0 Initial version
 */
class ProjectEntity {
  // PROPERTIES
  private _id: string;
  private _title: string;
  private _description: string;
  private _author: AuthorEntity;
  private _dateCreate: Date;
  private _dateExpire: Date;
  private _location: string;
  private _needs: NeedsEntity[];
  private _state: ProjectStatesEnum;
  // CONSTRUCTOR
  constructor({
    id = 'emptyProject',
    title = '',
    description = '',
    author = new AuthorEntity(),
    dateCreate = new Date(),
    dateExpire = new Date(),
    location = '',
    needs = [],
    state = ProjectStatesEnum.Empty,
  }: {
    id?: string;
    title?: string;
    description?: string;
    author?: AuthorEntity;
    dateCreate?: Date;
    dateExpire?: Date;
    location?: string;
    needs?: NeedsEntity[];
    state?: ProjectStatesEnum;
  } = {}) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._author = author;
    this._dateCreate = dateCreate;
    this._dateExpire = dateExpire;
    this._location = location;
    this._needs = needs;
    this._state = state;
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

  public get author(): AuthorEntity {
    return this._author;
  }
  public set author(author: AuthorEntity) {
    this._author = author;
  }

  public get dateCreate(): Date {
    return this._dateCreate;
  }
  public set dateCreate(dateCreate: Date) {
    this._dateCreate = dateCreate;
  }

  public get dateExpire(): Date {
    return this._dateExpire;
  }
  public set dateExpire(dateExpire: Date) {
    this._dateExpire = dateExpire;
  }

  public get location(): string {
    return this._location;
  }
  public set location(location: string) {
    this._location = location;
  }

  public get needs(): NeedsEntity[] {
    return this._needs;
  }
  public set needs(needs: NeedsEntity[]) {
    this._needs = needs;
  }

  public get state(): ProjectStatesEnum {
    return this._state;
  }
  public set state(state: ProjectStatesEnum) {
    this._state = state;
  }
}

export default ProjectEntity;
