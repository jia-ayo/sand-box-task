export const userTransformer = (user: any) => {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    profileImage: user.profileImage,
    bio: user.bio,
    followingIds: user.followingIds,
    hasNotification: user.hasNotification,
    followerscount: user.followerscount,
    createdAt: user.createdAt,
  };
};
