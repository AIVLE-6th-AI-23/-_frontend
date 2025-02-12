import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';

export const postSection = style({
    display: 'flex', 
    flexDirection :'column',
    padding: '0 10px 20px ',
    gap: '16px',
    justifyContent:'center',
    margin:'10px',
    backgroundColor:'#ffffff',
    borderRadius: '19px',
    height:"100%",
    width:'100%',
    boxSizing: 'border-box',
});

export const postBody = style({
    backgroundColor:"#fff",
    borderRadius:'8px',
    padding:'3px 0 0 8px',
    width:'100%',
    height:'90%',

});

export const sectionTitle = style({
    fontSize: '30px',
    fontWeight: 'bold',
    padding:'10px',
    marginBottom: '12px',
    color: colors.text,
});
export const postConent = style({
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap:'10px',
    width:'100%',
    gridAutoRows: 'minmax(150px, auto)',  // ✅ 행이 자동 추가되도록 설정
    alignContent: 'start',  
});

export const postItem = style({
    position: 'relative',
    padding: '12px',
    marginLeft: '10px',
    width: '90%',
    height:'100%',
    boxSizing: 'border-box',
    backgroundColor:colors.background,
    borderRadius:'8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ':last-child': {
        borderBottom: 'none',
    },

    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    ':hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
});

export const postsWrapper = style({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    padding: '0 10px',
    borderRadius: '8px',
    // backgroundColor: colors.test,
    gap: '12px',
    justifyContent: 'center',
    width: '90%',
    height:'100%',
});

export const postTitle = style({
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '8px 0',
    color: colors.text,
});

export const postDescription = style({
    fontSize: '14px',
    color: colors.text,
    marginBottom: '8px',
});

export const postStatus = style({
    fontSize: '12px',
    fontWeight: 'bold',
    color: colors.primary,
});

export const postViewCount = style({
    fontSize: '12px',
    color: colors.secondary,
});

export const deleteHidden =style({
    width:'100%',
    minHeight:'15px',
    display:'flex',
    alignItems:'center',
    margin:"0 30px 5px 30px",
    justifyContent:'flex-end',
    boxSizing:'border-box',
    position:'relative',
});

export const postActions = style({
  position: 'absolute',
  top: '50%', 
  right: '16px',
  display: 'flex',
  gap: '8px',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
  selectors: {
    [`${postItem}:hover &`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },
});
