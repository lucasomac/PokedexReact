import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        width: '50%',
        height: 200,
        backgroundColor: '#26273a',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
    },
    tinyLogo: {
        width: 100,
        height: 100,
        padding: 10,
    }, pokemon: {
        fontSize: 16,
        fontStyle: "italic",
        color: '#FFFFFF',
        fontFamily: "Roboto",
    }
});
export default styles;
// import styled from 'styled-components';
// import ElementTypes from '../../utils/elementsTypes';
//
// const Card = styled.button`
//   list-style: none;
//   background: #26273a;
//   width: 150px;
//   height: 120px;
//   padding: 5px;
//   border: 1px solid #71717310;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   position: relative;
//   transition: 150ms;
//   box-shadow:
//     0 1px 1px rgba(0,0,0,0.08),
//     0 2px 2px rgba(0,0,0,0.12),
//     0 4px 4px rgba(0,0,0,0.16),
//     0 8px 8px rgba(0,0,0,0.20),
//     inset 0 1px 1px  rgb(33, 55, 109, 0.11),
//     inset 0 2px 2px  rgb(33, 55, 109, 0.11),
//     inset 0 3px 4px  rgb(33, 55, 109, 0.11),
//     inset 0 2px 8px  rgb(33, 55, 109, 0.11),
//     inset 0 1px 16px rgb(33, 55, 109, 0.11);
//
//   &:hover {
//     cursor: pointer;
//     border: solid 3px ${(props: { color: any; }) => props.color};
//     padding: 3px;
//     transform: translate(2px, -3px);
//
//     img {
//       transform: scale(1.3) translate(5px, -3px);
//     }
//   }
//
//   &:active {
//     background: #71717f00;
//   }
//
//   &.selected {
//     border: solid 3px ${(props: { color: any; }) => props.color};
//     padding: 3px;
//   }
//
//   div.infos {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 5px;
//     position: absolute;
//     left: 5px;
//
//     p {
//       margin-bottom: 3px;
//       font-weight: 500;
//     }
//   }
//
//   div {
//     margin: 0;
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-end;
//     justify-content: flex-end;
//     height: 110px;
//     flex: 1;
//
//     img {
//       width: 75px;
//       height: auto;
//       max-height: 110px;
//       border: none;
//       margin-bottom: 5px;
//       transition: 150ms;
//     }
//
//     div {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//
//       p {
//         font-size: 9px;
//         font-weight: 700;
//         color: #DCDCDF;
//         display: block;
//
//         span {
//           font-size: 8px;
//         }
//       }
//     }
//   }`
//
// export default styles;
