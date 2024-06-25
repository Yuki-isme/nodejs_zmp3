// const $ = document.querySelector.bind(document);
// const $ = document.querySelectorAll.bind(document);

const optionAllSongList = $('.option-all__songs-list');
const musicNowTym = $('.music-control__left-action-tym-box');
const volumeIcon = $('.music-control__right-volume-icon');
const audio = $('#audio').get(0);
// var sliderItems=Array.from($('.option-all__song-slider-img'));
const sliderBox = $('.option-all__song-slider');
const sliderItems = $('.option-all__song-slider-img');
const playBtn = $('.js__music-control__icon-play');
const thunbPlayerBox = $('.music-control__left');
const progress = $('#progress');
const remainTime = $('.js__music-control__progress-time-start');
const durationTime = $('.js__music-control__progress-time-duration');
const prevBtn = $('.js__music-control__icon2');
const nextBtn = $('.js__music-control__icon4');
const mobileNextBtn = $('.js__mobile-player__ctrl-icon4');
const mobilePrevBtn = $('.js__mobile-player__ctrl-icon2');
const nameSong = $('.music-control__left-content-song');
const nameSinger = $('.music-control__left-content-singer');
const cdThumb = $('.music-control__left-img');
const playAllBtn = $('.js__playall-0');
const playAllBtn1 = $('.js__playall-1');
const randomBtn = $('.js__music-control__icon1');
const repeatBtn = $('.js__music-control__icon5');
const volumeProgress = $('#progress1');
const nextSongHeadding = $('.nextsong__fist');
const nextSongList = $('.nextsong__last-list');
const header = $('.header');
const mainContainer = $('.main-container');
const headerSetting = $('.header__setting');
const headerOverlay = $('.header__right-overlay');
const headerSettingList = $('.header__setting-list');

const themeModal = $('.theme-modal');
const themebtn = $('.header__theme');
const themeClosebtn = $('.theme-modal__close-btn');
const themeOverlay = $('.theme-modal__overlay');
const themeBody = $('.theme-modal__body');
const themeItems = $('.js-theme-item');
const tabs = $('.tabs-item');
const panes = $('.panes-item');
const sideBarTabs = $('.js__sidebar-tabs');
const containerPanes = $('.js__container-panes');
const slidersDiscover = $('.container-discover__slider-item');






var backgroundIndex= 0;
// x = 100  // center
// y = 50   // center
// r = 50   // radius
// a = 2    // angle (from 0 to Math.PI * 2)









const app = {
    // sliderIndex: 0,
    currentIndex : 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    volume: 100,

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songsData[this.currentIndex];
            }
        })
    },

    toastSlide: function() {
        const toatMain = $('#toast');
        if (toatMain) {
            const toast = document.createElement('div');
            toast.classList.add('toast');
            toast.innerHTML = `
                <div class="toast__item">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span>Chức năng này đang được phát triển, bạn vui lòng thử lại sau !</span>
                </div>
            `;
            toatMain.appendChild(toast);
            setTimeout(function() {
                toatMain.removeChild(toast);
            }, 3000)
        }
    },

    // THEME APPLY SKIN
    applyTheme: function() {
        themeItems.each(function(index) {
            $(this).on('click', function() {
                if (index == 0) {
                    backgroundIndex = 0;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/0.svg)');
                    $('.main-music-control').css({
                        backgroundImage: '',
                        backgroundColor: '#37075D'
                    });
                    $('.mobile-tab').css('backgroundColor', '#37075D');
                    $('.sidebar__add-playlist').css({
                        backgroundColor: '#411465',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                    });
                    $('.nextsong__option-wrapper').css('backgroundColor', '#4B206E');
                    $('.header__width-search-sub').css({
                        backgroundColor: '#6A39AF',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--purple').removeClass('header__width-search-sub--white header__width-search-sub--green');
                    $('.header__width-search').removeClass('js__gray-backgroundColor');
                    $('.header__setting-list').css('backgroundColor', '#6A39AF');
                    $('.theme-modal__body').css('backgroundColor', '#6A39AF');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#816399');
                    $('.main-sidebar').css('backgroundColor', 'hsla(0,0%,100%,0.05)');
                    $('.header__width-search-input').removeClass('header__width-search-input--white').addClass('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#816399',
                        color: '#fff'
                    });
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(255, 255, 255, 0.3)');

                    $('.js__main-color').css('color', '#fff');
                    $('.js__sub-color').css('color', 'rgba(255, 255, 255, 0.5)');
                    $('.js__backgroundColor').css('backgroundColor', 'rgba(255, 255, 255, 0.1)');
                    $('.js__border').css('border', '2px solid #fff');
                } else if (index == 1) {
                    backgroundIndex = 1;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/1.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#202020'
                    });
                    $('.mobile-tab').css('backgroundColor', '#202020');
                    $('.sidebar__add-playlist').css({
                        backgroundColor: '#333333',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.nextsong__option-wrapper').css('backgroundColor', '#3E3E3E');
                    $('.header__width-search-sub').css({
                        backgroundColor: '#3E3E3E',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--gray').removeClass('header__width-search-sub--purple header__width-search-sub--white header__width-search-sub--green');
                    $('.header__width-search').removeClass('js__gray-backgroundColor');
                    $('.header__setting-list').css('backgroundColor', '#3E3E3E');
                    $('.theme-modal__body').css('backgroundColor', '#3D3D3D');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#787878');
                    $('.main-sidebar').css('backgroundColor', 'hsla(0,0%,100%,0.05)');
                    $('.header__width-search-input').removeClass('header__width-search-input--white').addClass('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#787878',
                        color: '#fff'
                    });
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(255, 255, 255, 0.3)');

                    $('.js__main-color').css('color', '#fff');
                    $('.js__sub-color').css('color', 'rgba(255, 255, 255, 0.5)');
                    $('.js__backgroundColor').css('backgroundColor', '#3E3E3E');
                    $('.js__border').css('border', '2px solid #fff');
                } else if (index == 2) {
                    backgroundIndex = 2;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/2.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#051740'
                    });
                    $('.mobile-tab').css('backgroundColor', '#051740');
                    $('.sidebar__add-playlist').css({
                        backgroundColor: '#132958',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.nextsong__option-wrapper').css('backgroundColor', '#1F3461');
                    $('.header__width-search-sub').css({
                        backgroundColor: '#1F3461',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--green').removeClass('header__width-search-sub--purple header__width-search-sub--white header__width-search-sub--gray');
                    $('.header__setting-list').css('backgroundColor', '#1F3461');
                    $('.theme-modal__body').css('backgroundColor', '#192F60');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#637191');
                    $('.main-sidebar').css('backgroundColor', 'hsla(0,0%,100%,0.05)');
                    $('.header__width-search-input').removeClass('header__width-search-input--white').addClass('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#637191',
                        color: '#fff'
                    });
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(255, 255, 255, 0.3)');

                    $('.js__main-color').css('color', '#fff');
                    $('.js__sub-color').css('color', 'rgba(255, 255, 255, 0.5)');
                    $('.js__backgroundColor').css('backgroundColor', 'rgba(255, 255, 255, 0.1)');
                    $('.js__border').css('border', '2px solid #fff');
                } else if (index == 3) {
                    backgroundIndex = 3;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/3.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#D0CCC5'
                    });
                    $('.mobile-tab').css('backgroundColor', '#D0CCC5');
                    $('.sidebar__add-playlist').css({
                        backgroundColor: '#DAD6D3',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.nextsong__option-wrapper').css('backgroundColor', '#DAD6D3');
                    $('.header__width-search-sub').css({
                        backgroundColor: '#FFFFFE',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--white').removeClass('header__width-search-sub--purple header__width-search-sub--green header__width-search-sub--gray');
                    $('.header__setting-list').css('backgroundColor', '#FFFFFE');
                    $('.theme-modal__body').css('backgroundColor', '#E6E1DE');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#E5E2E0');
                    $('.main-sidebar').css('backgroundColor', 'rgba(0, 0, 0, 0.05)');
                    $('.header__width-search-input').addClass('header__width-search-input--white').removeClass('header__width-search-input--dark');
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');

                    $('.js__main-color').css('color', '#000');
                    $('.js__sub-color').css('color', '#696969');
                    $('.js__backgroundColor').css('backgroundColor', '#DAD6D3');
                    $('.js__border').css('border', '2px solid #000');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#E5E2E0',
                        color: '#000'
                    });
                } else if (index == 4) {
                    backgroundIndex = 4;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/4.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#B4D0D0'
                    });
                    $('.mobile-tab').css('backgroundColor', '#B4D0D0');
                    $('.sidebar__add-playlist').css({
                        backgroundColor: '#C9E4E6',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.nextsong__option-wrapper').css('backgroundColor', '#C9E4E6');
                    $('.header__width-search-sub').css({
                        backgroundColor: '#FFFFFE',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--white').removeClass('header__width-search-sub--purple header__width-search-sub--green header__width-search-sub--gray');
                    $('.header__setting-list').css('backgroundColor', '#FFFFFE');
                    $('.theme-modal__body').css('backgroundColor', '#C9E4E6');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#D9ECEE');
                    $('.main-sidebar').css('backgroundColor', 'rgba(255, 255, 255, 0.3)');
                    $('.header__width-search-input').addClass('header__width-search-input--white').removeClass('header__width-search-input--dark');
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');

                    $('.js__main-color').css('color', '#000');
                    $('.js__sub-color').css('color', '#696969');
                    $('.js__backgroundColor').css('backgroundColor', '#C9E4E6');
                    $('.js__border').css('border', '2px solid #000');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#D9ECEE',
                        color: '#000'
                    });
                } else if (index == 5) {
                    backgroundIndex = 5;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/5.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#F9C6C5'
                    });
                    $('.mobile-tab').css('backgroundColor', '#F9C6C5');
                    $('.sidebar__add-playlist').css({
                        backgroundColor: '#F6E7E4',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.nextsong__option-wrapper').css('backgroundColor', '#E6D2CD');
                    $('.header__width-search-sub').css({
                        backgroundColor: '#FFFFFE',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--white').removeClass('header__width-search-sub--purple header__width-search-sub--green header__width-search-sub--gray');
                    $('.header__setting-list').css('backgroundColor', '#FFFFFE');
                    $('.theme-modal__body').css('backgroundColor', '#F9C6C5');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#EEE0DC');
                    $('.main-sidebar').css('backgroundColor', 'rgba(255, 255, 255, 0.3)');
                    $('.header__width-search-input').addClass('header__width-search-input--white').removeClass('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#EEE0DC',
                        color: '#000'
                    });
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');

                    $('.js__main-color').css('color', '#000');
                    $('.js__sub-color').css('color', '#696969');
                    $('.js__backgroundColor').css('backgroundColor', '#E6D2CD');
                    $('.js__border').css('border', '2px solid #000');
                } else if (index == 6) {
                    backgroundIndex = 6;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/6.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#C6C4D1'
                    });
                    $('.mobile-tab, .sidebar__add-playlist, .nextsong__option-wrapper').css({
                        backgroundColor: '#B1B0BA',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.header__width-search-sub').css({
                        backgroundColor: '#FFFFFE',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--white').removeClass('header__width-search-sub--purple header__width-search-sub--green header__width-search-sub--gray');
                    $('.header__setting-list, .theme-modal__body').css('backgroundColor', '#FFFFFE');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#C9C8CF');
                    $('.main-sidebar').css('backgroundColor', 'rgba(0,0,0,0.05)');
                    $('.header__width-search-input').addClass('header__width-search-input--white').removeClass('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#C9C8CF',
                        color: '#000'
                    });
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');

                    $('.js__main-color').css('color', '#000');
                    $('.js__sub-color').css('color', '#696969');
                    $('.js__backgroundColor').css('backgroundColor', '#B1B0BA');
                    $('.js__border').css('border', '2px solid #000');
                } else if (index == 7) {
                    backgroundIndex = 7;
                    $('.header').css({
                        backgroundColor: `var(--header-color-${backgroundIndex})`,
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    });
                    $('.main').css('backgroundImage', 'url(./assets/img/background-theme/backroundThemes/7.jpg)');
                    $('.main-music-control').css({
                        backgroundImage: 'none',
                        backgroundColor: '#FFFFFF'
                    });
                    $('.mobile-tab, .sidebar__add-playlist, .nextsong__option-wrapper').css({
                        backgroundColor: '#F2F2F2',
                        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                    });
                    $('.header__width-search-sub').css({
                        backgroundColor: '#FFFFFE',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.1)'
                    }).addClass('header__width-search-sub--white').removeClass('header__width-search-sub--purple header__width-search-sub--green header__width-search-sub--gray');
                    $('.header__setting-list, .theme-modal__body').css('backgroundColor', '#FFFFFE');
                    $('.nextsong__option-wrapper-listplay').css('backgroundColor', '#FFFFFF');
                    $('.main-sidebar').css('backgroundColor', 'rgba(0,0,0,0.05)');
                    $('.header__width-search-input').addClass('header__width-search-input--white').removeClass('header__width-search-input--dark');
                    $('.music__option-item.music__option-item--active').css({
                        backgroundColor: '#FFFFFF',
                        color: '#000'
                    });
                    $('.music-control__volume-input, .music-control__progress-input').css('backgroundColor', 'rgba(0, 0, 0, 0.3)');

                    $('.js__main-color').css('color', '#000');
                    $('.js__sub-color').css('color', '#696969');
                    $('.js__backgroundColor').css('backgroundColor', '#F2F2F2');
                    $('.js__border').css('border', '2px solid #000');
                }

                app.verifyOptionTextColor();
            });
        });
    },

    // RENDER LIST MUSIC ITEM
    renderPlayList : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item0 ${index == this.currentIndex ? 'songs-item--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img js__songs-item-left-img-0">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden  js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden ">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.html(htmls.join(''));
    },

    // RENDER LIST MUSIC ITEM OPTION1
    renderPlayList1 : function (playListElement, songsData) {
        const htmls = songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item1 ${index == this.currentIndex ? 'songs-item--active songs-item-playbtn--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.background});" class="songs-item-left-img js__songs-item-left-img-1">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListElement.html(htmls.join(''));
    },

    // RENDER LIST ZINGCHART
    renderZingChart : function () {
        const htmls = this.songsData.map((song, index) => {
            return index < 10 ? `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item">
                    <div class="songs-item-left">
                        <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                        <span class="zingchart__item-left-line js__main-color">-</span>
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>` : ''
        })
        $('.js__zingchart__list').html(htmls.join(''));
    },

    // RENDER LIST ZINGCHART MORE
    renderZingChartMore : function () {
        const htmls = this.songsData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item">
                    <div class="songs-item-left">
                        <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                        <span class="zingchart__item-left-line">-</span>
                        <div style="background-image: url(${song.background});" class="songs-item-left-img">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                                <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                        <span>${song.name} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        $('.js__zingchart__list').html(htmls.join(''));
    },

    // RENDER HEADDING NEXT SONG
    renderNextSongHeadding: function(playListElement, songs){
        const htmls = this.songsData.map((song, index) => {
            return index <= this.currentIndex ? `
            <!-- nextsong__fist-item-headding--active nextsong__fist-item-playbtn--active-->
            <div class="nextsong__fist-item nextsong__item ${audio.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    <div class="songs-item-left-img-playing-box">
                        <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                    </div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                    <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
                </div>
                <div class="nextsong__item-action">
                    <span class="nextsong__item-action-heart">
                        <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                        <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                    </span>
                    <span class="nextsong__item-action-dot">
                        <i class="fas fa-ellipsis-h "></i>
                    </span>
                </div>
            </div>` : ''
        })
        playListElement.html(htmls.join(''));
    },

    // RENDER HEADDING NEXT SONG BAN ĐẦU
    renderNextSongHeaddingStart: function(playListElement, songs){
        const htmls = this.songsData.map((song, index) => {
            return index <= this.currentIndex ? `
            <!-- nextsong__fist-item-headding--active nextsong__fist-item-playbtn--active-->
            <div class="nextsong__fist-item nextsong__item nextsong__fist-item-playbtn--active ${audio.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
                <div class="nextsong__item-img" style="background-image: url(${song.background});">
                    <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                    <div class="songs-item-left-img-playing-box">
                        <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
                    </div>
                </div>
                <div class="nextsong__item-body">
                    <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                    <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
                </div>
                <div class="nextsong__item-action">
                    <span class="nextsong__item-action-heart">
                        <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                        <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                    </span>
                    <span class="nextsong__item-action-dot">
                        <i class="fas fa-ellipsis-h "></i>
                    </span>
                </div>
            </div>` : ''
        })
        playListElement.html(htmls.join(''));
    },

    // RENDER LIST NEXT SONG
    renderNextSongList: function(playListElement) {
        if (this.currentIndex >= this.songsData.length - 1) {
            playListElement.html(`
            <span class="nextsong__last-item-end js__sub-color">
                HẾT BÀI RỒI BẠN ƠI! HAHA
            </span>`);
        } else {
            const htmls = this.songsData.map((song, index) => {
                return index > this.currentIndex ? `
                    <li class="nextsong__last-item nextsong__item" data-index="${index}">
                        <div class="nextsong__item-img" style="background-image: url(${song.background});">
                            <div class="nextsong__item-playbtn"><i class="fas fa-play"></i></div>
                        </div>
                        <div class="nextsong__item-body">
                            <span class="nextsong__item-body-heading js__main-color">${song.name}</span>
                            <span class="nextsong__item-body-depsc js__sub-color">${song.singer}</span>
                        </div>
                        <div class="nextsong__item-action">
                            <span class="nextsong__item-action-heart">
                                <i class="fas fa-heart nextsong__item-action-heart-icon1"></i>
                                <i class="far fa-heart nextsong__item-action-heart-icon2"></i>
                            </span>
                            <span class="nextsong__item-action-dot js__main-color">
                                <i class="fas fa-ellipsis-h "></i>
                            </span>
                        </div>
                    </li>` : ''
            })
            playListElement.html(htmls.join(''));
        }

    },

    // RENDER LIST NEXT SONG RANDOM
    renderNextSongListRandom: function(playListElement) {
        const htmls =  `<span class="nextsong__option-random">
                            Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                        </span>`
        playListElement.html(htmls);
    },



    // KHI ACTIVE KHUẤT THÌ ĐƯA ITEM ACTIVE LÊN VIEW
    scrollToActiveSong: function () {
        setTimeout(() => {
            const activeSong = $(".songs-item--active").get(0); // Lấy DOM element từ đối tượng jQuery
            if (activeSong) {
                activeSong.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        }, 300);
    },


    // KHI ACTIVE KHUẤT THÌ ĐƯA NEXT SONG ITEM ACTIVE LÊN VIEW
    scrollToActiveNextSong: function () {
        // setTimeout(() => {
        //   $(".nextsong__fist-item-headding--active").scrollIntoView({
        //     behavior: "smooth",
        //     block: "nearest"
        //   });
        // }, 300);
    },

    RandomSong: async function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songsData.length);
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        await this.loadCurrentSong();
    },

    loadCurrentSong: async function () {
        nameSong.text(this.currentSong.name); // Sử dụng text() để thiết lập nội dung văn bản trong jQuery
        $('.mobile-player__body-now-name').text(this.currentSong.name);
        nameSinger.text(this.currentSong.singer);
        $('.mobile-player__body-now-singer').text(this.currentSong.singer);
        $('.mobile-player__body-thumb').css('backgroundImage', `url('${this.currentSong.background}')`); // Sử dụng css() để thiết lập thuộc tính CSS
        $('.music-control__left-img').css('backgroundImage', `url('${this.currentSong.background}')`);
        this.displayDurationTime();
        await $.ajax({
            url: `getSong/${this.currentSong.id}`,
            method: 'GET',
            dataType: 'json',
            success: (res) => {
                audio.src = res;
            }
        });
    },

    nextSong: async function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songsData.length) {
            this.currentIndex = 0;
        }
        await this.loadCurrentSong();
    },

    prevSong: async function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songsData.length - 1;
        }
        await this.loadCurrentSong();
    },

    // ĐỊNH DẠNG LẠI THỜI GIAN CHO ĐẸP
    formatTime : function(number) {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    },

    // HIỂN THỊ REMAIN TIME TIME VÀO PLAYER
    displayRemainTime : function() {
        remainTime.text(this.formatTime(audio.currentTime));
        // on mobile
        $('.mobile-player__ctrl-progress-time-start').text(this.formatTime(audio.currentTime));
    },

    // HIỂN THỊ VÀ DURATION TIME VÀO PLAYER
    displayDurationTime : function() {
        // if (!audio.duration) {
        //     durationTime.textContent = "00:00";
        // } else {
        //     durationTime.textContent = this.formatTime(audio.duration);
        // }
        durationTime.text(this.currentSong.duration);
        $('.mobile-player__ctrl-progress-time-duration').text(this.currentSong.duration);
    },

    // render next song
    renderNextSong: function() {
        this.renderNextSongHeadding(nextSongHeadding,this.songsData);
        this.renderNextSongList(nextSongList);
        themeItems[backgroundIndex].click();
    },

    verifyOptionTextColor: function() {
        $('.music__option-item').each(function(index, tab) {
            if (backgroundIndex === 0 || backgroundIndex === 1 || backgroundIndex === 2) {
                $(tab).css('color', '#fff');
            } else {
                $(tab).css('color', '#000');
            }
        });
    },

    // SỰ KIỆN VÀ XỬ LÝ
    handleEvents: function () {
        const _this = this;
        const songTyms = $('.songs-item-right-tym');
        const songItems = $('.js__song-item0');
        const nextSongsItem = $('.nextsong__item');
        const playBtnIcons = $('.js__songs-item-left-img-0');
        const playNextSongBtnIcons = $('.nextsong__item-img');
        const songItemsOption1 = $('.js__song-item1');
        const playBtnIconsOption1 = $('.js__songs-item-left-img-1');
        const actionHeartNextSongs = $('.nextsong__item-action-heart');
        const nextSongBox = $('.nextsong__box');

        var sliderIndex = 1;
        var sliderIndex1 = 1;
        var sliderLenght = _this.songsData.length;

        // KHI BẤM VÀO PLAYER ON MOBILE THÌ HIỆN PLAYER TO TRÊN ĐIỆN THOẠI
        $('.music-control__left').onclick = function() {
            $('.mobile-player').addClass('active');
        }

        $('.mobile-player__headding-close').onclick = function() {
            $('.mobile-player').removeClass('active');
        }

        // NHẤN MORE HIỂN THỊ 100 BÀI HÁT
        $('.js__zingchart__100more').onclick = function() {
            _this.renderZingChartMore();
            this.style.display = 'none';
        }

        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART
        sideBarTabs.each(function(index, tab) {
            $(tab).on('click', function() {
                $('.js__sidebar-tabs.sidebar__item--active').removeClass('sidebar__item--active');
                $(this).addClass('sidebar__item--active');
                containerPanes.hide(); // Ẩn tất cả các containerPanes
                containerPanes.eq(index).show(); // Hiển thị containerPanes tại chỉ số index
            });
        });

        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART TRÊN MOBILE
        $('.js__mobile-tab__item').each(function(index, tab) {
            $(tab).on('click', function() {
                $('.mobile-tab__item.active').removeClass('active');
                $(this).addClass('active');
                containerPanes.css('display', 'none'); // Ẩn tất cả các containerPanes
                containerPanes.eq(index).css('display', 'block'); // Hiển thị containerPanes tại chỉ số index
            });
        });

        // chuyển tab option
        $('.tabs-item').each(function(index, tab) {
            const pane = panes[index]; // Đây là giả sử bạn đã định nghĩa biến panes ở một nơi khác

            $('.panes-item:not(.music__option-item--active)').css('background-color', 'transparent');
            themeItems[backgroundIndex].click();
            _this.verifyOptionTextColor();

            $(tab).on('click', function() {
                $('.music__option-item.music__option-item--active').removeClass('music__option-item--active');
                $(this).addClass('music__option-item--active');

                $('.panes-item.active').removeClass('active');
                $('.tabs-item').css('background-color', 'transparent');
                $(this).css('background-color', `var(--option-color-${backgroundIndex})`);

                $(pane).addClass('active');

                // Bỏ comment nếu cần thiết
                // if (index === 1) {
                //     _this.renderPlayList1($('.option-music-list'),_this.songsData);
                // }

                $('.music__option-item.music__option-item--active').removeClass('js__main-color');
            });
        });

        // khi mới mở web thì sẽ chọn hightlight dòng đầu tiên
        $(songItems[this.currentIndex]).addClass('songs-item-playbtn--active');


        songTyms.each(function(index, songTym) {
            $(songTym).on('click', function() {
                $(this).toggleClass('songs-item-right-tym--active');
            });
        });

        // CLICK TYM Ở NOW PLAYER
        musicNowTym.on('click', function() {
            $(this).toggleClass('music-control__left-action-tym-box-active');
        });

        // BẬT TĂT MUTE Ở VOLUME
        volumeIcon.on('click', function() {
            _this.isMute = !_this.isMute;
            $(this).toggleClass('music-control__right--active', _this.isMute);
            if (_this.isMute) {
                audio.volume = 0;
                volumeProgress.val(0);
            } else {
                audio.volume = _this.volume / 100;
                volumeProgress.val(_this.volume);
            }
        });

        // TĂNG GIẢM ÂM LƯỢNG
        volumeProgress.on('input', function(e) {
            _this.volume = e.target.value;
            audio.volume = e.target.value / 100;
            if (e.target.value == 0) {
                volumeIcon.addClass('music-control__right--active');
                _this.isMute = true;
            } else {
                volumeIcon.removeClass('music-control__right--active');
                _this.isMute = false;
            }
        });

        // XỬ LÝ CD QUAY/DỪNG
        // Pause CD animation
        const cdThumb = $('.music-control__left-img');
        const cdThumbAnimate = cdThumb.css('animation', 'rotateCd 10s linear infinite').css('animation-play-state', 'paused');

        // Pause CD animation on mobile
        const cdThumbMobile = $('.mobile-player__body-thumb');
        const cdThumbAnimateMobile = cdThumbMobile.css('animation', 'rotateCd 10s linear infinite').css('animation-play-state', 'paused');

        // LÀM SLIDER BÊN TAP CÁ NHÂN
        const changeImage = function() {
            sliderItems.each(function(index) {
                if (index === sliderIndex) {
                    $(this).removeClass('option-all__song-slider-img-third option-all__song-slider-img-second').addClass('option-all__song-slider-img-first');
                } else if (index === sliderIndex + 1 || (sliderIndex === sliderLenght - 1 && index === 0)) {
                    $(this).removeClass('option-all__song-slider-img-third option-all__song-slider-img-first').addClass('option-all__song-slider-img-second');
                } else {
                    $(this).removeClass('option-all__song-slider-img-first option-all__song-slider-img-second').addClass('option-all__song-slider-img-third');
                }
            });
            sliderIndex = (sliderIndex + 1) % sliderLenght;
        };
        setInterval(changeImage, 2000);

        // LÀM SLIDER BÊN TAP KHÁM PHÁ
        const changeImage1Replate = function() {
            slidersDiscover.each(function(index) {
                if (index === sliderIndex1) {
                    $(this).removeClass('container-discover__slider-item-second container-discover__slider-item-third container-discover__slider-item-four').addClass('container-discover__slider-item-first');
                } else if (index === sliderIndex1 + 1 || (sliderIndex1 === 3 && index === 0)) {
                    $(this).removeClass('container-discover__slider-item-first container-discover__slider-item-third container-discover__slider-item-four').addClass('container-discover__slider-item-second');
                } else if (index === sliderIndex1 + 2 || (sliderIndex1 === 3 && index === 1)) {
                    $(this).removeClass('container-discover__slider-item-first container-discover__slider-item-second container-discover__slider-item-four').addClass('container-discover__slider-item-third');
                } else {
                    $(this).removeClass('container-discover__slider-item-first container-discover__slider-item-second container-discover__slider-item-third').addClass('container-discover__slider-item-four');
                }
            });
        };
        const changeImage1 = function() {
            changeImage1Replate();
            sliderIndex1++;
            if (sliderIndex1 >= 4) {
                sliderIndex1 = 0;
            }
        };
        setInterval(changeImage1, 5000);

        // khi bấm vào nut right của slider
        $('.js__container-discover__slider-right').on('click', function() {
            changeImage1();
        });

        // khi bấm vào nut left của slider
        $('.js__container-discover__slider-left').on('click', function() {
            changeImage1Replate();
            sliderIndex1--;
            if (sliderIndex1 < 0) {
                sliderIndex1 = 3;
            }
        });

        // XỬ LÝ KHI CLICK VÀO NÚT PLAY
        playBtn.on('click', function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        });

        // XỬ LÝ KHI CLICK VÀO NÚT PLAY ON MOBILE
        $('.js__mobile-player__ctrl-icon').on('click', function() {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        });

        // Khi song được play
        audio.addEventListener('play', function() {
            const nextSongsItemHeadding = $('.nextsong__fist-item');

            _this.isPlaying = true;
            cdThumb.css('animation-play-state', 'running');
            cdThumbMobile.css('animation-play-state', 'running');
            playBtn.addClass('music-control__icon-play--active');
            $('.js__mobile-player__ctrl-icon').addClass('music-control__icon-play--active');
            thunbPlayerBox.css('transform', 'translateX(20px)')

            $(songItems[_this.currentIndex]).addClass('songs-item-playing--active-onplay songs-item--active');
            $(songItems[_this.currentIndex]).removeClass('songs-item-playbtn--active');

            $(songItemsOption1[_this.currentIndex]).addClass('songs-item-playing--active-onplay songs-item--active');
            $(songItemsOption1[_this.currentIndex]).removeClass('songs-item-playbtn--active');

            const nextSongItems = $('.nextsong__item');
            $(nextSongItems[_this.currentIndex]).addClass('nextsong__fist-item-headding--active');
            $(nextSongItems[_this.currentIndex]).removeClass('nextsong__fist-item-playbtn--active');
        });

        // KHI SONG BỊ PAUSE
        audio.addEventListener('pause', function() {
            _this.isPlaying = false;
            cdThumb.css('animation-play-state', 'paused');
            cdThumbMobile.css('animation-play-state', 'paused');
            playBtn.removeClass('music-control__icon-play--active');
            $('.js__mobile-player__ctrl-icon').removeClass('music-control__icon-play--active');
            thunbPlayerBox.css('transform', 'translateX(0)');

            $(songItems[_this.currentIndex]).removeClass('songs-item-playing--active-onplay');
            $(songItems[_this.currentIndex]).addClass('songs-item-playbtn--active');

            $(songItemsOption1[_this.currentIndex]).removeClass('songs-item-playing--active-onplay');
            $(songItemsOption1[_this.currentIndex]).addClass('songs-item-playbtn--active');

            const nextSongItems = $('.nextsong__item');
            $(nextSongItems[_this.currentIndex]).removeClass('nextsong__fist-item-headding--active');
            $(nextSongItems[_this.currentIndex]).addClass('nextsong__fist-item-playbtn--active');
        });

        // KHI TIẾN ĐỘ BÀI HÁT THAY ĐỔI
        audio.addEventListener('timeupdate', function() {
            if (audio.duration) {
                const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100);
                progress.val(progressPercent); // on desktop
                $('#progress2').val(progressPercent); // on mobile
            }
            _this.displayRemainTime();
        });

        // KHI TUA SONG
        progress.on('input', function(e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        });

        // KHI TUA SONG ON MOBILE
        $('#progress2').on('input', function(e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        });

        // XOÁ CÁC THUỘC TÍNH KHI ACTIVE CŨ
        deleteActive = function() {
            songItems.each(function(index, songItem) {
                $(songItem).removeClass('songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active');
            });
        }

        deleteActive1 = function() {
            songItemsOption1.each(function(index, songItem) {
                $(songItem).removeClass('songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active');
            });
        }


        // KHI NEXT SONG
        nextBtn.on('click', async function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding, this.songsData);
                $('.nextsong__list').html(`
            <span class="nextsong__last-item-end">
                Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
            </span>`);
            } else {
                await _this.nextSong();
                _this.renderNextSong();
            }
            audio.play();
            _this.scrollToActiveNextSong();
            _this.scrollToActiveSong();
            deleteActive();
            deleteActive1();
        });

        // KHI NEXT SONG ON MOBILE
        mobileNextBtn.on('click', async function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding, this.songsData);
                $('.nextsong__list').html(`
            <span class="nextsong__last-item-end">
                Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
            </span>`);
            } else {
                await _this.nextSong();
                _this.renderNextSong();
            }
            audio.play();
            _this.scrollToActiveNextSong();
            _this.scrollToActiveSong();
            deleteActive();
            deleteActive1();
        });

        // KHI PREV SONG
        prevBtn.on('click', async function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding, this.songsData);
                $('.nextsong__list').html(`
            <span class="nextsong__last-item-end">
                Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
            </span>`);
                _this.scrollToActiveNextSong();
            } else {
                await _this.prevSong();
                _this.renderNextSong();
                _this.scrollToActiveNextSong();
            }
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
        });

        // KHI PREV SONG ON MOBILE
        mobilePrevBtn.on('click', async function() {
            if (_this.isRandom) {
                _this.RandomSong();
                // không render list next song
                _this.renderNextSongHeadding(nextSongHeadding, this.songsData);
                $('.nextsong__list').html(`
            <span class="nextsong__last-item-end">
                Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
            </span>`);
                _this.scrollToActiveNextSong();
            } else {
                await _this.prevSong();
                _this.renderNextSong();
                _this.scrollToActiveNextSong();
            }
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
        });

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-0
        playAllBtn.onclick = async function() {
            _this.currentIndex = 0;
            await _this.loadCurrentSong();
            audio.play();
            deleteActive();
            _this.scrollToActiveSong();
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.html(`
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`);
            } else {
                _this.renderNextSong();
                // setTimeout(_this.scrollToActiveNextSong(), 2000);
                _this.scrollToActiveNextSong();
            }
        }

        // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-1
        playAllBtn1.onclick = async function() {
            _this.currentIndex = 0;
            await _this.loadCurrentSong();
            audio.play();
            deleteActive();
            deleteActive1();
            _this.scrollToActiveSong();
            if(_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding,_this.songsData);
                nextSongList.html(`
                    <span class="nextsong__last-item-end">
                        Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
                    </span>`);
            } else {
                _this.renderNextSong();
                // setTimeout(_this.scrollToActiveNextSong(), 2000);
                _this.scrollToActiveNextSong();
            }
        }

        // KHI BẤM VÀO NÚT PLAY Ở THUMB BÀI BÁT Ở PHẦN TỔNG QUAN
        playBtnIcons.each(function(index) {
            $(this).on('click', async function() {
                if (_this.isPlaying && _this.currentIndex === index) {
                    audio.pause();
                } else if (!_this.isPlaying && _this.currentIndex === index) {
                    audio.play();
                } else if (_this.currentIndex !== index) {
                    _this.currentIndex = index;
                    await _this.loadCurrentSong();
                    audio.play();
                    deleteActive();
                    deleteActive1();
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }

                if (_this.isRandom) {
                    _this.renderNextSongHeadding(nextSongHeadding, _this.songsData);
                    $('.nextsong__last-item-end').html('Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)');
                } else if (!_this.isRandom && _this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').text('HẾT BÀI RỒI BẠN ƠI! HAHA');
                } else {
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }
            });
        });

        // KHI BẤM VÀO NÚT PLAY Ở THUMB BÀI BÁT Ở PHẦN MUSIC OPTION1
        playBtnIconsOption1.each(function(index) {
            $(this).on('click', async function() {
                if (_this.isPlaying && _this.currentIndex === index) {
                    audio.pause();
                } else if (!_this.isPlaying && _this.currentIndex === index) {
                    audio.play();
                } else if (_this.currentIndex !== index) {
                    _this.currentIndex = index;
                    await _this.loadCurrentSong();
                    audio.play();
                    deleteActive();
                    deleteActive1();
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }

                if (_this.isRandom) {
                    _this.renderNextSongHeadding(nextSongHeadding, _this.songsData);
                    $('.nextsong__last-item-end').html('Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)');
                } else if (!_this.isRandom && _this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').text('HẾT BÀI RỒI BẠN ƠI! HAHA');
                } else {
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }
            });
        });

        // KHI CLICK VÀO NEXT SONG BOX
        nextSongBox.on('click', '.nextsong__item', async function(e) {
            const songNode = $(e.target).closest(".nextsong__item");
            if (songNode.length > 0) {
                if ($(e.target).closest(".nextsong__item-action-heart").length > 0) {
                    $(e.target).closest(".nextsong__item-action-heart").toggleClass('nextsong__item-action-heart--unheart');
                }
                if ($(e.target).closest(".nextsong__item-img").length > 0) {
                    if (_this.isPlaying && Number(songNode.data('index')) === _this.currentIndex) {
                        audio.pause();
                        _this.isPlaying = false;
                        songNode.removeClass('nextsong__fist-item-headding--active');
                    } else if (!_this.isPlaying && Number(songNode.data('index')) === _this.currentIndex) {
                        audio.play();
                        _this.isPlaying = true;
                        songNode.addClass('nextsong__fist-item-headding--active');
                    } else if (Number(songNode.data('index')) !== _this.currentIndex) {
                        _this.currentIndex = Number(songNode.data('index'));
                        await _this.loadCurrentSong();
                        _this.renderNextSong();
                        deleteActive();
                        _this.scrollToActiveSong();
                        audio.play();
                        _this.isPlaying = true;
                        const nextSongItems = $('.nextsong__item');
                        nextSongItems.eq(_this.currentIndex).addClass('nextsong__fist-item-headding--active');
                    }
                }
            }
        });

        // KHI CLICK DUP VÀO NEXT SONG BOX
        nextSongBox.on('dblclick', '.nextsong__item:not(.nextsong__fist-item-headding--active)', async function(e) {
            const songNode = $(e.target).closest(".nextsong__item");
            if (songNode.length > 0) {
                if (_this.isPlaying && Number(songNode.data('index')) === _this.currentIndex) {
                    audio.pause();
                    _this.isPlaying = false;
                    songNode.removeClass('nextsong__fist-item-headding--active');
                } else if (!_this.isPlaying && Number(songNode.data('index')) === _this.currentIndex) {
                    audio.play();
                    _this.isPlaying = true;
                    songNode.addClass('nextsong__fist-item-headding--active');
                } else if (Number(songNode.data('index')) !== _this.currentIndex) {
                    _this.currentIndex = Number(songNode.data('index'));
                    await _this.loadCurrentSong();
                    _this.renderNextSong();
                    deleteActive();
                    _this.scrollToActiveSong();
                    audio.play();
                    _this.isPlaying = true;
                    const nextSongItems = $('.nextsong__item');
                    nextSongItems.eq(_this.currentIndex).addClass('nextsong__fist-item-headding--active');
                }
            }
        });

        // KHI BẬT NÚT CHẠY RANDOM
        const randomBtn = $('.js__music-control__icon1');
        const repeatBtn = $('.js__music-control__icon5');

        randomBtn.on('click', function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            randomBtn.toggleClass("music-control__icon-random--active", _this.isRandom);
            randomBtn.css('color', _this.isRandom ? 'var(--primary-color)' : '#fff');
            repeatBtn.toggleClass("music-control__icon-repeat--active", _this.isRepeat);

            if (_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding, _this.songsData);
                $('.nextsong__last-item-end').html(`
            Bật chế độ random thì cần gì xem trước <br> bài phát tiếp theo nhể, đỡ phải code :)
        `);
            } else {
                if (_this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').text('HẾT BÀI RỒI BẠN ƠI! HAHA');
                } else {
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }
            }
        });

        // KHI BẬT NÚT CHẠY RANDOM ON MOBILE
        $('.js__mobile-player__ctrl-icon1').on('click', function() {
            _this.isRandom = !_this.isRandom;
            _this.isRepeat = false;
            randomBtn.toggleClass("music-control__icon-random--active", _this.isRandom);
            $('.js__mobile-player__ctrl-icon1').toggleClass("music-control__icon-random--active", _this.isRandom);
            randomBtn.css('color', _this.isRandom ? 'var(--primary-color)' : '#fff');
            $('.js__mobile-player__ctrl-icon5').toggleClass("music-control__icon-repeat--active", _this.isRepeat);

            if (_this.isRandom) {
                _this.renderNextSongHeadding(nextSongHeadding, _this.songsData);
                $('.nextsong__last-item-end').html(`
            Bật chế độ random thì cần gì xem trước <br> bài phát tiếp theo nhể, đỡ phải code :)
        `);
            } else {
                if (_this.currentIndex >= _this.songsData.length - 1) {
                    $('.nextsong__last-item-end').text('HẾT BÀI RỒI BẠN ƠI! HAHA');
                } else {
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }
            }
        });

        // KHI BẬT NÚT CHẠY REPEAT
        repeatBtn.on('click', function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            repeatBtn.toggleClass("music-control__icon-repeat--active", _this.isRepeat);
            repeatBtn.css('color', 'var(--primary-color)');
            randomBtn.toggleClass("music-control__icon-random--active", _this.isRandom);
            _this.renderNextSong();
            _this.scrollToActiveNextSong();
        });

        // KHI BẬT NÚT CHẠY REPEAT ON MOBILE
        $('.js__mobile-player__ctrl-icon5').on('click', function() {
            _this.isRepeat = !_this.isRepeat;
            _this.isRandom = false;
            $('.js__mobile-player__ctrl-icon5').toggleClass("music-control__icon-repeat--active", _this.isRepeat);
            $('.js__mobile-player__ctrl-icon1').toggleClass("music-control__icon-random--active", _this.isRandom);
            _this.renderNextSong();
            _this.scrollToActiveNextSong();
        });


        // XỬ LÝ KHI AUDIO KẾT THÚC
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
                _this.renderNextSong();
                _this.scrollToActiveNextSong();
            }
        };

        // KHI CLICK DUP VÀO BÀI NHẠC THÌ PHÁT NHẠC
        songItems.each(function(index) {
            $(this).on('dblclick', async function() {
                _this.currentIndex = index;
                await _this.loadCurrentSong();
                deleteActive();
                deleteActive1();
                audio.play();

                if (_this.isRandom) {
                    // không render next song list
                    _this.renderNextSongHeadding(nextSongHeadding, _this.songsData);
                } else {
                    _this.renderNextSong();
                    _this.scrollToActiveNextSong();
                }
            });
        });

        // CUỘN LÊN THÌ LÀM TRONG THANH HEADER
        mainContainer.on('scroll', function() {
            scrollTop = mainContainer.scrollTop();
            if (scrollTop > 5) {
                header.css({
                    backgroundColor: `var(--header-color-${backgroundIndex})`,
                    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                });
            } else {
                header.css({
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                });
            }
        });

        // KHI CLICK SETTING
        headerSetting.on('click', function(e) {
            headerSetting.toggleClass('header__setting--active');
            headerOverlay.removeClass('hiden');
        });
        headerSettingList.on('click', function(e) {
            e.stopPropagation();
            headerOverlay.addClass('hiden');
            headerSetting.removeClass('header__setting--active');
        });
        headerOverlay.on('click', function() {
            headerSetting.removeClass('header__setting--active');
            headerOverlay.addClass('hiden');
        });

        // THEME MODAL
        themebtn.on('click', function() {
            themeModal.toggleClass('theme-modal--avtive');
        });
        themeBody.on('click', function(e) {
            e.stopPropagation();
        });
        themeClosebtn.on('click', function() {
            themeModal.removeClass('theme-modal--avtive');
        });
        themeOverlay.on('click', function() {
            themeModal.removeClass('theme-modal--avtive');
        });

        // TOAST
        $('.js__toast').each(function(index, item) {
            $(item).on('click', function() {
                _this.toastSlide();
            });
        });






    },

    // QUAY NỐT NHẠC VỆ TINH
    // musicNote : function() {
    //     setInterval(function() {
    //         a = (a + Math.PI / 300) % (Math.PI * 2);
    //         var px = x + r * Math.cos(a);
    //         var py = y + r * Math.sin(a);
    //         document.querySelector('.vetinh-1').style.left = px + "px";
    //         document.querySelector('.vetinh-1').style.top = py + "px";
    //     })
    // },


    //=================================================================
    start: async function(songsData) {
        this.songsData = songsData;
        // render ra danh sách nhạc ở phần tổng quan
        this.renderPlayList(optionAllSongList,this.songsData);
        // render ra danh sách nhạc ở phần tab music
        this.renderPlayList1($('.option-music-list'),this.songsData);
        // render next song
        this.renderNextSong();
        // render next song start
        this.renderNextSongHeaddingStart(nextSongHeadding,this.songsData);
        // render zingchart
        this.renderZingChart();



        // Define các thuộc tính cho object
        this.defineProperties();

        // xử lý và sự kiện
        this.handleEvents();

        // hiển thị thời gian chạy và thời lượng của audio hiện tại
        this.displayDurationTime();

        // theme
        this.applyTheme();

        await this.loadCurrentSong();

        // this.musicNote();
    }

}
