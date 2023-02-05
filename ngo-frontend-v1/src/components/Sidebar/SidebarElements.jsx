import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.section`
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    width: 330px;
    padding: 2.6rem 1.6rem;
    background: linear-gradient(175.93deg, #5f00d8 -10.23%, #b200f1 117.03%);
`;

const Header = styled.div``;

const Separator = styled.span`
    display: block;
    width: 100%;
    height: 0.5px;
    background-color: rgb(144 101 191);
    margin: 1rem 0;
    opacity: 0.8;
`;

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
`;

const iconColor = {
    selected: "#250032d6",
    unselected: "#ffffffab",
};

const textColor = {
    selected: "rgb(49 8 93)",
    unselected: "white",
};

const itemColor = {
    selected: "#ffffffee",
    unselected: "none",
};

const NavButton = styled.button`
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    width: 100%;

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    min-height: 42px;
    padding: 8px 8px 8px 16px;
    color: ${(props) =>
        props.selected ? textColor.selected : textColor.unselected};

    background-color: ${(props) =>
        props.selected ? itemColor.selected : itemColor.unselected};
    transition: 250ms;
    border-radius: 12px;

    & > svg {
        color: ${(props) =>
            props.selected ? iconColor.selected : iconColor.unselected};
        transition: 250ms;
        font-size: 28px;
    }

    &:hover {
        background-color: ${itemColor.selected};
        color: ${textColor.selected};
        box-shadow: 0px 1px 6px black;
        transform: translate(0px, 2px);

        & > svg {
            color: ${iconColor.selected};
        }
    }

    &:active {
        transform: translate(0);
        box-shadow: none;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    min-height: 42px;
    padding: 8px 8px 8px 16px;
    color: ${(props) =>
        props.selected ? textColor.selected : textColor.unselected};

    background-color: ${(props) =>
        props.selected ? itemColor.selected : itemColor.unselected};
    transition: 250ms;
    border-radius: 12px;

    & > svg {
        color: ${(props) =>
            props.selected ? iconColor.selected : iconColor.unselected};
        transition: 250ms;
        font-size: 28px;
    }

    &:hover {
        background-color: ${itemColor.selected};
        color: ${textColor.selected};
        box-shadow: -1px 1px 6px black;
        transform: translate(2px, 2px);

        & > svg {
            color: ${iconColor.selected};
        }
    }
`;

const ItemText = styled.span`
    margin-left: 1.6rem;
    font-family: Outfit;
    font-size: 17px;
    font-weight: 600;
    transition: 50ms;
`;

const Item = ({
    to,
    label,
    icon = null,
    selected = false,
    button = false,
    onClick = () => {},
    style = {},
}) => {
    if (button)
        return (
            <NavButton onClick={onClick} style={style}>
                {icon}
                <ItemText>{label}</ItemText>
            </NavButton>
        );
    return (
        <NavLink to={to} selected={selected} onClick={onClick} style={style}>
            {icon}
            <ItemText>{label}</ItemText>
        </NavLink>
    );
};

export const Sidebar = {
    Container,
    Header,
    Separator,
    Navigation,
    Item,
};

export default Sidebar;
