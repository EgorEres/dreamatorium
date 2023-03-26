import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Profile {
  id: string;
  name: string;
}

interface ProfileState {
  profile?: Profile;
  updateProfile: (data: Profile) => void;
}

export const useProfileStore = create<ProfileState>()(devtools((set) => ({
  profile: {} as Profile,
  updateProfile: (data: Profile) => set(
    () => ({ profile: data }),
    false,
    'profile/update'
  ),
}), {
  name: 'profile-store'
}))
