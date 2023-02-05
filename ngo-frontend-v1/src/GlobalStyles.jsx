import { css, Global } from "@emotion/react";

export default function GlobalStyles() {
    return (
        <Global
            styles={css`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            `}
        />
    );
}
