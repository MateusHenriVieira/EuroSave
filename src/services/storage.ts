import type { UserState } from '../types';

const DEFAULT_STATE: UserState = {
  usageCount: 0,
  isPremium: false,
  totalSaved: 0,
  currency: 'EUR',
};

export const storageService = {
  async getUserState(): Promise<UserState> {
    const data = await chrome.storage.local.get('eurosave_user');
    return (data.eurosave_user as UserState) || DEFAULT_STATE;
  },

  async incrementUsage(): Promise<void> {
    const state = await this.getUserState();
    if (!state.isPremium) {
      await chrome.storage.local.set({
        eurosave_user: { ...state, usageCount: state.usageCount + 1 }
      });
    }
  },

  async setPremium(status: boolean): Promise<void> {
    const state = await this.getUserState();
    await chrome.storage.local.set({
      eurosave_user: { ...state, isPremium: status }
    });
  }
};