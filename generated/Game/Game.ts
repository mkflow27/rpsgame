// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class logOutcome extends ethereum.Event {
  get params(): logOutcome__Params {
    return new logOutcome__Params(this);
  }
}

export class logOutcome__Params {
  _event: logOutcome;

  constructor(event: logOutcome) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get param1(): string {
    return this._event.parameters[1].value.toString();
  }

  get param2(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Game extends ethereum.SmartContract {
  static bind(address: Address): Game {
    return new Game("Game", address);
  }

  peakState(): BigInt {
    let result = super.call("peakState", "peakState():(uint256)", []);

    return result[0].toBigInt();
  }

  try_peakState(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("peakState", "peakState():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  playMove(_move: BigInt): string {
    let result = super.call("playMove", "playMove(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_move)
    ]);

    return result[0].toString();
  }

  try_playMove(_move: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("playMove", "playMove(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_move)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  returnNumber(_random: string): string {
    let result = super.call("returnNumber", "returnNumber(string):(string)", [
      ethereum.Value.fromString(_random)
    ]);

    return result[0].toString();
  }

  try_returnNumber(_random: string): ethereum.CallResult<string> {
    let result = super.tryCall(
      "returnNumber",
      "returnNumber(string):(string)",
      [ethereum.Value.fromString(_random)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  state(): BigInt {
    let result = super.call("state", "state():(uint256)", []);

    return result[0].toBigInt();
  }

  try_state(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("state", "state():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class PlayMoveCall extends ethereum.Call {
  get inputs(): PlayMoveCall__Inputs {
    return new PlayMoveCall__Inputs(this);
  }

  get outputs(): PlayMoveCall__Outputs {
    return new PlayMoveCall__Outputs(this);
  }
}

export class PlayMoveCall__Inputs {
  _call: PlayMoveCall;

  constructor(call: PlayMoveCall) {
    this._call = call;
  }

  get _move(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class PlayMoveCall__Outputs {
  _call: PlayMoveCall;

  constructor(call: PlayMoveCall) {
    this._call = call;
  }

  get value0(): string {
    return this._call.outputValues[0].value.toString();
  }
}