import classNames from 'classnames/bind';

import styles from './Contact.module.scss';
import Button from '../Button';
const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Button href="https://www.tiktok.com/about?lang=en" className={cx('title')}>
                    About
                </Button>
                <Button href="https://newsroom.tiktok.com/" className={cx('title')}>
                    Newsroom
                </Button>
                <Button href="https://www.tiktok.com/about/contact?lang=en" className={cx('title')}>
                    Contact
                </Button>
                <Button href="https://careers.tiktok.com" className={cx('title')}>
                    Careers
                </Button>
            </div>
            <div className={cx('body')}>
                <Button href="https://www.tiktok.com/forgood" className={cx('title')}>
                    TikTok for Good
                </Button>
                <Button
                    href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web"
                    className={cx('title')}
                >
                    Advertise
                </Button>
                <Button href="https://developers.tiktok.com/?refer=tiktok_web" className={cx('title')}>
                    Developers
                </Button>
                <Button href="https://www.tiktok.com/transparency" className={cx('title')}>
                    Transparency
                </Button>
                <Button href="https://www.tiktok.com/tiktok-rewards/en" className={cx('title')}>
                    TikTok Rewards
                </Button>
                <Button href="https://www.tiktok.com/embed" className={cx('title')}>
                    TikTok Embeds
                </Button>
            </div>
            <div className={cx('body')}>
                <Button href="https://support.tiktok.com/en" className={cx('title')}>
                    Help
                </Button>
                <Button href="https://www.tiktok.com/safety?lang=en" className={cx('title')}>
                    Safety
                </Button>
                <Button href="https://www.tiktok.com/about/contact?lang=en" className={cx('title')}>
                    Contact
                </Button>
                <Button href="https://www.tiktok.com/legal/terms-of-service?lang=en" className={cx('title')}>
                    Terms
                </Button>
                <Button href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" className={cx('title')}>
                    Privacy
                </Button>
                <Button href="https://www.tiktok.com/creators/creator-portal/en-us/" className={cx('title')}>
                    Creator Portal
                </Button>
                <Button href="https://www.tiktok.com/community-guidelines?lang=en" className={cx('title')}>
                    Community Guidelines
                </Button>
            </div>
            <div className={cx('footer')}>© 2023 TikTok</div>
        </div>
    );
}

export default Contact;
