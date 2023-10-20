import { getSession } from 'next-auth/react';

import { SKIP_AUTH } from '@/utils/app/const';

import { Session, User } from '@/types/auth';

export const getClientSession = async () => {
  const authjsSession = await getSession();

  if (authjsSession) {
    let user: User | undefined = undefined;
    if (authjsSession.user) {
      user = {
        email: authjsSession?.user?.email,
        name: authjsSession?.user?.name,
        image: authjsSession?.user?.image,
      };
    }

    const session: Session = {
      user: user,
      expires: authjsSession.expires,
      customAccessToken: authjsSession.customAccessToken,
    };

    return session;
  }

  return null;
};

export const getUser = async () => {
  if (SKIP_AUTH) {
    return {
      email: 'default_user',
      image: null,
      name: 'Default User',
    };
  }

  const session = await getClientSession();

  let user = session?.user;

  if (!user) {
    user = {
      email: 'default_user',
      image: null,
      name: 'Default User',
    };
  }

  return user;
};
