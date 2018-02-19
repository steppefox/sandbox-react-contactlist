import * as faker from 'faker';

export default function generateItems(amount = 1000): any {
    const res: any = {};
    for (let i = 0; i < amount; i++) {
        const id = faker.random.uuid();

        res[id] = {
            id: id,
            name: faker.name.findName(),
            date: Math.floor(faker.date.past().getTime() / 1000),
            unreadMessages: faker.random.number({ min: 0, max: 1 }),
            lastMessage: faker.lorem.sentence(),
            messages: []
        };
    }

    return res;
};

console.log(JSON.stringify(generateItems(1000)));
