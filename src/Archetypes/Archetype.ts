import { EnergyType } from '../Energy';

export default abstract class Archetype {
  static numberOfIntances = 0;
  private readonly _special: number;
  private readonly _cost: number;

  constructor(
    private readonly _name: string, 
  ) {
    Archetype.numberOfIntances += 1;
    this._special = 0;
    this._cost = 0;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    return this.numberOfIntances;
  }

  get name():string {
    return this._name;
  }

  get special():number {
    return this._special;
  }

  get cost():number {
    return this._cost;
  }
}