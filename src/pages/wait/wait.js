import mui from '../../helpers/middleware';
import { pageBack } from '../../helpers/util';
import { setState, getState } from '../../helpers/state';
import '../../redux/wait';
import './wait.less';

const template = require('../../libs/art.template');

const task = {
	// 获取 待解运单数据
	fetchWaitList: () => {
		app.wait.fetchWaitList({
      orderNode: "WAITING"
		}).then(json => {
			// 
			const data = {
				list: json.data
			}

			const html = template('wait-template', data);
			document.getElementById('wait-mui-scroll').innerHTML = html;
		})
	}
}

// ios 导航状态
mui.init({
	statusBarBackground: '#f7f7f7',
	swipeBack: false
});


// 调用h5 plus的事件系统
mui._ready(function() {

	task.fetchWaitList()

});


// 退出
pageBack(mui);