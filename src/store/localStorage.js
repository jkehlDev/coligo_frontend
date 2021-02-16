const STORAGE_STATE_KEY = 'stateSave';
const local = {
  /**
   * @method loadState
   */
  loadState: () => {
    try {
      const serializedState = localStorage.getItem(STORAGE_STATE_KEY);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      return undefined;
    }
  },

  /**
   * @method saveState
   * @param {Object} state : Target object to save inner local storage state index
   */
  saveState: (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(STORAGE_STATE_KEY, serializedState);
    } catch (error) {
      console.error(error);
    }
  },
};
export default local;
