import { StyleSheet, PixelRatio } from 'react-native'
import { colors, fonts } from '../../themes';
import { moderateScale } from '../../themes/styleConfig';

export const commentstyle = StyleSheet.create({
  commentContainer: {
    padding: moderateScale(5),
    flexDirection: 'row'
  },
  left: {
    padding: moderateScale(5)
  },
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: 40
  },
  right: {
    flex: 1,
    padding: moderateScale(5)
  },
  rightContent: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: colors.CommentrightContentColors
  },
  rightContentTop: {
    flexDirection: 'row'
  },

  name: {
    fontWeight: 'bold',
    paddingBottom: moderateScale(5)
  },
  editIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  body: {
    paddingBottom: moderateScale(10)
  },
  rightActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: 12,
    paddingLeft: moderateScale(5),
    color: colors.time,
    fontStyle: 'italic'
  },
  actionText: {
    color: colors.CommentactionTextColors,
    fontWeight: 'bold'
  },
  repliedSection: {
    width: moderateScale(180),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  repliedImg: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: 20
  },
  repliedUsername: {
    color: colors.CommentrepliedUsernameColors,
    fontWeight: 'bold'
  },
  repliedText: {
    color: colors.CommentrepliedTextColors,
  },
  repliedCount: {
    color: colors.CommentrepliedCountColors,
    fontSize: 12
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.CommentinputSectionColors,
  },
  submit: {
    padding: moderateScale(10),
  },
  input: {
    flex: 1,
    padding: moderateScale(10),
    backgroundColor: colors.CommentinputbgColors,
    color: colors.CommentinputColors,
  },
  likeNr: {
    fontWeight: 'normal',
    fontSize: 12
  },
  likeHeader: {
    textAlign: 'center',
    padding: moderateScale(10),
    fontWeight: 'bold'

  },
  likeButton: {
    margin: moderateScale(10),
    alignItems: 'center',

  },
  likeContainer: {
    padding: moderateScale(10),
    width: moderateScale(200),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  likeImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 50
  },
  likename: {
    fontWeight: 'bold',
    fontSize: 14
  },
  editModalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  editModal: {
    backgroundColor: colors.CommenteditModalColors,
    width: moderateScale(400),
    height: moderateScale(300),
    borderWidth: moderateScale(2),
    borderColor: colors.CommenteditModalborderColors
  },
  editButtons:{
    flexDirection:"row",
    justifyContent: "space-around",
    height: moderateScale(40),
    width: moderateScale(80),
    paddingLeft: moderateScale(5),
    paddingRight: moderateScale(5),
    alignItems: "center",
    borderWidth: moderateScale(1),
    borderColor: colors.CommenteditButtonsborderColors,
    borderRadius: 5,
    margin: moderateScale(10)

  },
  Img:{
    height: moderateScale(200),
    width:moderateScale(400), 
    resizeMode: "stretch",
  }

})
