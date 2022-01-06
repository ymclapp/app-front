import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';

const API_URL = 'http://localhost:3000/api/auth/';

export const AuthContext = createContext();

export default function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error ('You forgot AuthProvider');
    return auth;
}

const hasPermission = useCallback(function (permission) {
    if (!user) return false;
    
    //No specific permission requested, but they are signed in
    if (!permission) return true;

    //Asked for permission and user has none
    if (!user.permission) return false;

    //Can user do the specific thing?
    return user.permission.includes(permission);
  }, [user]);

  const auth = useMemo(() => {
      console.log('New auth state!');

      return ({
          user,

          hasPermission,
          login,
          logout,
      });
  }, [user, hasPermission]);

  useEffect(() => {
      //Load token/user from cookie

  }, []);

  useEffect(() => {
      //Set or remove cookie
  }, [user])

})