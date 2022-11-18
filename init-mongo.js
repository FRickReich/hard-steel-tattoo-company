db.createUser({
    user: 'admin',
    pwd: 'developmentPassword',
    roles: [
        {
            role: 'readWrite',
            db: 'web',
        },
    ],
});
