import { PlayerState, stateBoolean } from "@aicore8/lib/client";
import type { PhoneClientAdapter } from "@aicore8/shared";
import { onOwnOpen } from "../ownState";

/** yseries (TeamsGG): player state bag `phoneOpen` (teamsgg.dev/docs/paid-scripts/phone/state-bags). */
const open = new PlayerState("phoneOpen", stateBoolean);

export const ySeries: PhoneClientAdapter = {
  resource: "yseries",
  watch: (opened) => onOwnOpen(open, opened),
};
