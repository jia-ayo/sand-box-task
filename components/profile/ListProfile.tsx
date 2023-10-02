import useUsers from '@/hooks/useUsers';
import React from 'react';
import ProfileCard from './ProfileCard';

const ListProfile = () => {
    const { data: users = [] } = useUsers();
    if (users.length === 0) {
      return null;
    }
    return (
        <div>
            {users.map((user: Record<string, any>) => (
                <ProfileCard
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    profileImage={user.profileImage}
                    description={user.bio}
                />
            )
            )}
        </div>
    );
};

export default ListProfile;