import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const CustomNavLink = styled(NavLink)(() => {
    return {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})