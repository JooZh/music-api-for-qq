class Lyric {
	constructor(obj) {
		// this.time = obj.songTime;
		// this.lyric = obj.lyricStr;
		this.tags = {};
		this.lines = [];
		let arrLyric = obj.lyricStr.split('\n');
		let regLyric = /^\[\d+:\d+((\.|\:)\d+)?\].+$/;
		let regTags = /^\[[a-z]+:.*\]$/;
		for (let i = 0; i < arrLyric.length; i++) {
			// 去掉每行行首空格
			let lyricLine = arrLyric[i].replace(/\s+/, '');
			// 匹配成功
			if (regTags.test(lyricLine)) {
				let str = lyricLine.replace(/(\[|\])/g, '');
				let tagArr = str.split(':');
				this.tags[tagArr[0]] = tagArr[1];
			} else if (regLyric.test(lyricLine)) {
				// time 是毫秒
				let time = Lyric.getTime(lyricLine, obj);
				let text = lyricLine.replace(/\[([\s\S]+)\]/, '');
				this.lines.push({
					time: time,
					text: text
				})
			}
		}
		// 参数中传递了滚动节点的话就执行创建dom方法
		if (obj.showElement) {
			this.dom(obj);
		}
	}
	// 时间转换
	static getTime(str, obj) {
		let time, aStr, timeArr;
		if (str.indexOf('[') !== -1) {
			aStr = str.match(/\[\d+:\d+((\.|\:)\d+)?\]/g)
			if (aStr.length > 1) {
				str = aStr[1].replace(/(\[|\])/g, '');
			}
		}
		timeArr = str.match(/\d+/g);
		if (timeArr.length === 3) {
			time = (parseInt(timeArr[0]) * 60 + parseInt(timeArr[1])) * 1000;
			time += parseInt(timeArr[2]) * 10;
		} else {
			time = (parseInt(timeArr[0]) * 60 + parseInt(timeArr[1])) * 1000;
		}
		// 解决延迟时间
		if (obj.lateTime) {
			time += obj.lateTime;
			if (time < 100) {
				time += Math.abs(obj.lateTime);
			}
		}
		return time;
	}
}

module.exports = Lyric;