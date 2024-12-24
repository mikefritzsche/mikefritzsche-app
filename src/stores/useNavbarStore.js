import { create } from 'zustand';

const useNavbarStore = create((set) => {
  // Check localStorage for 'hasVisited'
  const hasVisited = localStorage.getItem('hasVisited');
  const showNavbarInitial = hasVisited === 'true';

  return {
    fadeOut: false,
    showNavbar: showNavbarInitial,
    setFadeOut: (fadeOut) => set({ fadeOut }),
    setShowNavbar: (showNavbar) => {
      localStorage.setItem('hasVisited', showNavbar.toString());
      set({ showNavbar });
    },
  };
});

export default useNavbarStore;
