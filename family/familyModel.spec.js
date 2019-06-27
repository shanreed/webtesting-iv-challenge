const db = require('../database/dbConfig')
const Members = require('./family-model')


describe('Family model', () => {
    beforeEach(() => {
        return db ('members').truncate();
    })
    describe('add()', () => {
        it('should add athe provided member into the db', () => {
            return Members.add({name: 'Shannon'})
            .then(() => {
                return Members.add({name: 'Tatum'})
            })
            .then(() => {
                return Members.add({name: 'Trevia'})
            })
            //asertion
            .then(() => {
                return db('members')
                .then(member => {
                    expect(member).toHaveLength(3)
                })
            })
        });
        
    });

    describe('remove', () => {
        beforeEach(async () => {
            await db('members').truncate();
          });
    
        it('should remove shannon from db by id', async () => {
            await Members.add({name: 'shannon'})
            await Members.remove(1)
            const members = await db('members')
            expect(members).toHaveLength(0)
           
    
            
        })
      })
})
