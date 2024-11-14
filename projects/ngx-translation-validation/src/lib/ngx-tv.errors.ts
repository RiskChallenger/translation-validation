export class ControlNameNotFoundError extends Error {
  constructor(reason: string) {
    super(`Name for control cannot be found: ${reason}`);
    this.name = 'ControlNameNotFoundError';
  }
}
