import createSchema from 'part:@sanity/base/schema-creator'
import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'

export default createSchema({
  name: 'default',
  types: [blockContent, castMember, crewMember, movie, person, screening]
})
