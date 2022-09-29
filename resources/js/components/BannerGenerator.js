import React from 'react';
import {useCallback, useRef} from 'react';
import {toPng} from 'html-to-image';
import vaseToken from '../../assets/img/vase-token.png'
import {Button} from "react-bootstrap";
import s from '../../sass/components/BannerGenerator.module.scss'

// https://www.npmjs.com/package/html-to-image
const BannerGenerator = ({coin}) => {
    const ref = useRef(null)
    const originalWidth = 1448
    const originalHeight = 1032

    console.log('BannerGenerator', coin)

    const downloadBannerHandler = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, {cacheBust: true,})
            .then((dataUrl) => {
                // console.log('downloadBannerHandler', dataUrl)
                const link = document.createElement('a')
                // link.download = 'my-image-name.png'
                link.download = `${coin.name}.png`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div style={{
                height: '0px',
                overflow: 'hidden'
            }}>
                <div className="shadow-lg" ref={ref}>
                    <div
                        className={s.bnGenerator}
                        style={{
                            backgroundImage: `url(${vaseToken})`,
                            backgroundSize: 'cover',
                            width: `${originalWidth / 2}px`,
                            height: `${originalHeight / 2}px`
                        }}
                    >
                        <div className={s.content}>
                            <h2 className={s.title}>{coin.name}</h2>
                            <p className={s.description}  dangerouslySetInnerHTML={{__html: coin.description.substring(0, 200)}}/>
                            <p className={s.link}>
                                coinzoomer.com{ window.location.pathname }
                            </p>
                        </div>
                        <div className={s.image}>
                            <div className={s.logo}>
                                <div
                                    className={s.coinLogo}
                                    style={{
                                        backgroundImage: `url(${coin.logotype})`,
                                        backgroundSize: 'cover',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                variant="primary"
                size="lg"
                className={`btn-big btn-violet mt-3`}
                onClick={downloadBannerHandler}
            >
                Download listing Banner
            </Button>
        </div>
    );
};

export default BannerGenerator;
