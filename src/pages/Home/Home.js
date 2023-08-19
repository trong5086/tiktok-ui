import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import Image from '~/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MusicIcon, PositionIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Link to="/@katchan6000" className={cx('logo')}>
                <Image
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/de627ebfaf8c964c65ce5510b9904e96.jpeg?x-expires=1692608400&x-signature=YvHqmwQo2cRtDAWTKbAYXol%2BnLc%3D"
                    alt=""
                />
            </Link>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>angel_movie612</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} alt="" />
                    <span>Kenny</span>
                </h4>
                <div className={cx('video-desc')}>Part2</div>
                <a className={cx('video-music')} href="https://fb.com">
                    <MusicIcon />
                    Aesthetic - Tollan Kim
                </a>
                <a className={cx('video-position')} href="https://fb.com">
                    <PositionIcon />
                    Aesthetic - Tollan Kim
                </a>
            </div>
        </div>
    );
}

export default Home;
