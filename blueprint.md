# Lotto Luck: The Ultimate Lotto Number Generator

## Overview

This application provides a fun and visually engaging way to generate unique sets of lottery numbers. It's built with modern web technologies to be fast, beautiful, and easy to use.

## Design and Features

*   **Modern UI/UX:** The interface is designed to be clean, intuitive, and aesthetically pleasing. It incorporates modern design principles for a premium feel.
*   **Web Component-Based:** Each lottery number is a self-contained `<lotto-ball>` Web Component, encapsulating its structure, style, and behavior within the Shadow DOM.
*   **Dynamic Generation:** The core JavaScript logic generates 6 unique numbers between 1 and 45 with a click of a button.
*   **Advanced Styling:**
    *   **Typography:** Uses the "Poppins" font from Google Fonts for a clean and modern look.
    *   **Color Palette:** A vibrant and energetic color palette is used for the lottery balls.
    *   **Texture:** A subtle noise texture is applied to the background for a tactile feel.
    *   **Depth:** Multi-layered drop shadows are used on the main container to create a sense of depth, making it feel "lifted" off the page.
    *   **Interactivity:** The "Generate" button has a "glow" effect on hover to provide satisfying feedback.
*   **Animation:** Generated numbers appear with a slight delay, creating a more engaging "reveal" effect.

## Current Plan: V2 Enhancement

1.  **Update `blueprint.md`:** Refine the project documentation to reflect the new design, architecture, and features.
2.  **Update `index.html`:**
    *   Change the document title to "Lotto Luck".
    *   Link the "Poppins" Google Font.
    *   Update the main heading to be more engaging.
3.  **Update `main.js`:**
    *   Define and register a new custom element, `<lotto-ball>`, which will be responsible for rendering a single lottery number. This component will use a Shadow DOM for encapsulation.
    *   Modify the number generation logic to create and append `<lotto-ball>` instances instead of generic `div` elements.
    *   Implement a staggered animation effect for revealing the numbers.
4.  **Update `style.css`:**
    *   Import and apply the "Poppins" font.
    *   Add a `::before` pseudo-element to the `body` to create a subtle noise background texture.
    *   Update the main container with a `backdrop-filter` for a frosted glass effect and a deep `box-shadow`.
    *   Style the "Generate" button with a gradient background and a "glow" shadow effect on hover.
