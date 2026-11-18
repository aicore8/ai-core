import { PlayerState, stateBoolean } from "@aicore8/lib/client";
import type { PhoneClientAdapter } from "@aicore8/shared";
import { onOwnOpen } from "../ownState";

/** high-phone: player state bag `phone:open` (docs.high-scripts.com/phone/statebags/player). */
const open = new PlayerState("phone:open", stateBoolean);

export const highPhone: PhoneClientAdapter = {
  resource: "high-phone",
  watch: (opened) => onOwnOpen(open, opened),
};
