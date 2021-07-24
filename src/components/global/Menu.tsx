import React, { useReducer, useEffect, useRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { LogoButton } from './LogoButton';

type StyledProps = {
  state: string;
};
const MenuWrapper = styled.nav<StyledProps>`
  height: ${(props) => (props.state === `MOBILE_DISPLAY` ? `100vh` : `0`)};
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: var(--level-three);

  #logo {
    position: fixed;
    top: ${(props) =>
      props.state === `MOBILE_DISPLAY` ? `20px` : `calc(100vh - 130px)`};
    right: ${(props) =>
      props.state === `MOBILE_DISPLAY` ? `calc(50vw - 50px)` : `30px`};
    z-index: var(--level-four);
  }

  .modal {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    transform: ${(props) =>
      props.state === `MOBILE_DISPLAY` ? `scale(1)` : `scale(0)`};
    background-color: var(--purple-dark-6);
    justify-content: center;
    transition: all 0.2s ease-in;
    transition-delay: 0.5s;
    z-index: var(--level-three);

    ul {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      li {
        margin-bottom: 100px;
        a {
          color: var(--white);
          text-decoration: none;
          font-size: 1.5rem;

          &:hover {
            color: var(--accent);
          }
        }
      }
    }
  }

  button {
    background-color: var(--accent);
    height: 70px;
    width: 70px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const Menu = ({ path }) => {
  const states = {
    MOBILE_DISPLAY: `MOBILE_DISPLAY`,
    BUTTON_HIDDEN: `BUTTON_HIDDEN`,
    BUTTON_DISPLAY: `BUTTON_DISPLAY`,
    DESKTOP_DISPLAY: `DESKTOP_DISPLAY`,
    DESKTOP_HIDDEN: `DEKSTOP_HIDDEN`,
  };

  const events = {
    SCROLL_DOWN: `SCROLL_DOWN`,
    SCROLL_UP: `SCROLL_UP`,
    BUTTON_CLICK: `BUTTON_CLICK`,
    CLOSE_CLICK: `CLOSE_CLICK`,
    TO_DESKTOP_WIDTH: `TO_DESKTOP_WIDTH`,
    TO_MOBILE_WIDTH: `TO_MOBILE_WIDTH`,
  };

  const machine = {
    initial: states.BUTTON_DISPLAY,
    states: {
      [states.MOBILE_DISPLAY]: {
        on: {
          [events.CLOSE_CLICK]: states.BUTTON_DISPLAY,
          [events.TO_DESKTOP_WIDTH]: states.DESKTOP_DISPLAY,
        },
      },
      [states.BUTTON_HIDDEN]: {
        on: {
          [events.TO_DESKTOP_WIDTH]: states.DESKTOP_DISPLAY,
        },
      },
      [states.BUTTON_DISPLAY]: {
        on: {
          [events.BUTTON_CLICK]: states.MOBILE_DISPLAY,
          [events.TO_DESKTOP_WIDTH]: states.DESKTOP_DISPLAY,
        },
      },
      [states.DESKTOP_DISPLAY]: {
        on: {
          [events.SCROLL_DOWN]: states.DESKTOP_HIDDEN,
          [events.TO_MOBILE_WIDTH]: states.MOBILE_DISPLAY,
        },
      },
      [states.DESKTOP_HIDDEN]: {
        on: {
          [events.SCROLL_UP]: states.DESKTOP_DISPLAY,
          [events.TO_MOBILE_WIDTH]: states.BUTTON_DISPLAY,
        },
      },
    },
  };

  const stateTransition = (state: string, event: string) =>
    machine.states[state].on[event] || state;

  const [state, send] = useReducer(stateTransition, machine.initial);

  // HANDLE EVENTS
  // Scroll
  // use ref to keep last value on re-render
  const previousScrollPosition: MutableRefObject<number> = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      if (previousScrollPosition.current < currentScroll) {
        send(events.SCROLL_DOWN);
      } else {
        send(events.SCROLL_UP);
      }
      previousScrollPosition.current = currentScroll;
    }
    // use passive option to optmise scrolling
    window.addEventListener(`scroll`, handleScroll, { passive: true });

    // Window Size
    function handleResize(entries: any) {
      const { width }: { width: number } = entries[0].contentRect;
      if (width > 1000) {
        send(events.TO_DESKTOP_WIDTH);
      } else {
        send(events.TO_MOBILE_WIDTH);
      }
    }
    const resizeObserver = new ResizeObserver(handleResize);
    const body = document.querySelector(`body`);
    if (body) {
      resizeObserver.observe(body);
    }

    // remove event listener on unmount
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
      if (body) {
        resizeObserver.unobserve(body);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MenuWrapper state={state}>
        <div className="modal">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: path === `/about/` ? `none` : `block` }}>
              <Link to="/about">About</Link>
            </li>
            <li style={{ display: path === `/blog/` ? `none` : `block` }}>
              <Link to="/blog">Blog</Link>
            </li>
            <li style={{ display: path === `/contact/` ? `none` : `block` }}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            type="button"
            onClick={() => {
              send(events.CLOSE_CLICK);
              document.body.style.overflowY = `auto`;
            }}
          >
            Close
          </button>
        </div>
        <LogoButton
          state={state}
          action={() => {
            send(events.BUTTON_CLICK);
            document.body.style.overflowY = `hidden`;
          }}
        />
      </MenuWrapper>
    </>
  );
};
