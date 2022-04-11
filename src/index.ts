/// <reference path="index.d.ts" />

import Log from "./logger";

class Player {
  public constructor(
    private id: number = -1
  ) { }

  public static getLocal(): Player { 
    return new Player();
  }

  public static getFromId(id: number): Player { 
    return new Player(id);
  }

  public assignToId(id: number) {
    this.id = id;
  }

  public getName(): string {
    return Entity.GetName(this.id);
  }
}

const onCreateMove = (): void => {
  const me = Player.getLocal();

  Log(me.getName());
}

Cheat.RegisterCallback(
  'CreateMove',
  'onCreateMove'
);