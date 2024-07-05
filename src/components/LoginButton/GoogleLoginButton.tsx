import { env } from '@/env/env';
import Image from 'next/image';
import { StyledButton } from './GoogleLoginButton.styles';

const popupCenter = ({ url, title, w, h }) => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
          ? document.documentElement.clientWidth
          : screen.width;
    const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
          ? document.documentElement.clientHeight
          : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
        url,
        title,
        `
      scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
    );

    if (newWindow) newWindow.focus();
};

const openLoginWindow = () => {
    popupCenter({
        url: `${env.API_ENDPOINT}/oauth2/authorization/google`,
        title: 'Login with Google',
        w: 450,
        h: 550,
    });
};

const GoogleLoginButton = () => {
    return (
        <StyledButton onClick={openLoginWindow}>
            <Image src="/google.svg" alt="Google logo" width={20} height={20} />
            <span>Login with Google</span>
        </StyledButton>
    );
};

export default GoogleLoginButton;
