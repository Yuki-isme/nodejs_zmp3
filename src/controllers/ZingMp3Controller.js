const Controller = require('./Controller');
const { ZingMp3 } = require("../custom_modules/ZingMp3Api");
const path = require("node:path");

class ZingMp3Controller extends Controller {
    static async #calTime(seconds) {
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;
        return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
    }
    static async index(req, res) {
        const response = await ZingMp3.getHome();
        const playlist = await ZingMp3.getDetailPlaylist('ZWZB96AI');
        // const song = await ZingMp3.getSong('Z77B8FA0');
        // const songInfo = await ZingMp3.getInfoSong('Z77B8FA0');
        let items = response.data.items;
        let contentSectionType = {};

        let songs = [];
        for (const [index, item] of Object.entries(playlist.data.song.items)) {
            let time = await ZingMp3Controller.#calTime(item.duration);
            songs.push({
                id: item.encodeId,
                background: item.thumbnail,
                name: item.title,
                singer: item.artistsNames,
                pathSong: '/assets/music/list-song/0.mp3',
                duration : time,
            });
        }

        // for (const [index, item] of Object.entries(items)) {
        //     // console.log(`${index}: `, {sectionType: item.sectionType, viewType: item.viewType, sectionId: item.sectionId, title: item.title, type: typeof item.items !== "undefined"});
        //
        //     let classCss = [];
        //     if (item.sectionType) {
        //         classCss.push(`zing-mp3-${item.sectionType}`);
        //     }
        //     if (item.viewType) {
        //         classCss.push(`zing-mp3-${item.viewType}`);
        //     }
        //     item.classCss = classCss.join(' ');
        //
        //     let indexKey = `${item.sectionType}`;
        //     let content = ``;
        //     let sectionTypePath = path.join(__dirname, `../views/ZingMp3/sectionType/${item.sectionType}/${item.sectionType}.ejs`);
        //     let itemsPath = path.join(__dirname, `../views/ZingMp3/sectionType/${item.sectionType}/items.ejs`);
        //     let sectionTypeData = {};
        //     if (typeof item.items !== "undefined") {
        //         for (const [key, value] of Object.entries(item.items)) {
        //             let data = {}
        //             switch (item.sectionType) {
        //                 case 'banner':
        //                     data = {...data, src: value.banner, href: value.link, songId: value.encodeId};
        //                     break;
        //                 case 'recentPlaylist':
        //                     break;
        //                 case 'new-release':
        //                     let newReleaseContent = ``;
        //                     let itemPath = path.join(__dirname, `../views/ZingMp3/sectionType/${item.sectionType}/item.ejs`);
        //                     for (const [newReleaseKey, newReleaseValue] of Object.entries(value)) {
        //                         //item.ejs
        //                         let newReleaseData = { src: newReleaseValue.thumbnail, href: newReleaseValue.link };
        //                         newReleaseContent += await super._renderEjsFile(itemPath, newReleaseData);
        //                     }
        //                     let titleKey = {
        //                         all: 'Tất cả',
        //                         vPop: 'Việt Nam',
        //                         others: 'Quốc tế',
        //                     }
        //                     data = {...data, content: newReleaseContent, title: titleKey[key]};
        //                     break;
        //                 case 'newReleaseChart':
        //                     break;
        //                 case 'RTChart':
        //                     break;
        //                 case 'weekChart':
        //                     break;
        //                 case 'adBanner':
        //                     data = {...data, src: value.thumbnail, href: value.link, title: value.title};
        //                     break;
        //                 case 'livestream':
        //                     data = {...data, src: value.thumbnail, href: value.link, title: value.title};
        //                     break;
        //                 case 'playlist':
        //                     switch (item.sectionId) {
        //                         case 'hEditorTheme':
        //                             data = {...data, src: value.thumbnail, href: value.link};
        //                             break;
        //                         case 'hEditorTheme3':
        //                             data = {...data, src: value.thumbnail, href: value.link};
        //                             break;
        //                         case 'hSeasonTheme':
        //                             data = {...data, src: value.thumbnail, href: value.link};
        //                             break;
        //                         case 'h100':
        //                             data = {...data, src: value.thumbnail, href: value.link};
        //                             break;
        //                         case 'hAlbum':
        //                             data = {...data, src: value.thumbnail, href: value.link};
        //                             break;
        //                         default:
        //                             console.log('No section id!');
        //                             break;
        //                     }
        //                     indexKey = `${item.sectionType}_${item.sectionId}`;
        //                     break;
        //                 default:
        //                     console.log('No section type!');
        //                     break;
        //             }
        //             value.content = await super._renderEjsFile(itemsPath, data);
        //             content += value.content;
        //         }
        //     }
        //
        //     sectionTypeData.title = item.title;
        //     sectionTypeData.content = content;
        //
        //     item.content = await super._renderEjsFile(sectionTypePath, sectionTypeData);
        //     contentSectionType[indexKey] = item.content;
        // }

        // let sectionTypePath = path.join(__dirname, `../views/layouts/main.hbs`);
        // let html = await super._renderHbsFile(sectionTypePath, {url: 'aa'});

        await super._index(req, res, 'ZingMp3', { items: items, content: contentSectionType, songs: songs });
    }

    static async getSong (req, res) {
        let song = await ZingMp3.getSong(req.params.id);
        if (typeof song?.data !== 'undefined') {
            if (typeof song.data['320'] !== 'undefined' && song.data['320'] !== 'VIP') {
                res.json(song.data['320']);
            } else {
                res.json(song.data['128']);
            }
        } else {
            res.json();
        }
    }
}

module.exports = ZingMp3Controller;


