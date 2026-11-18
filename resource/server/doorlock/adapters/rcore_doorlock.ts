import { callExport } from "@aicore8/lib/server";
import type { DoorlockAdapter } from "@aicore8/shared";

/**
 * rcore_doorlock (docs): server export `changeDoorState(doorId, state) -> boolean` (0 unlocked, 1 locked; kept and sent
 * to every client). No server read of one door's state.
 */
export const rcoreDoorlock: DoorlockAdapter = {
  resource: "rcore_doorlock",
  setLocked: (id, locked) =>
    callExport("rcore_doorlock", "changeDoorState", id, locked ? 1 : 0) ===
    true,
  isLocked: () => null,
};
