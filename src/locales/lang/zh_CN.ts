import { genMessage } from '../helper';
import antdLocale from 'ant-design-vue/es/locale/zh_CN';
import momentLocale from 'moment/dist/locale/zh-cn';

// 国际化模块, 加载zh-CN 下全部js
const modules = import.meta.globEager('./zh-CN/**/*.ts');
export default {
  message: {
    ...genMessage(modules, 'zh-CN'),
    antdLocale,
  },
  momentLocale,
  momentLocaleName: 'zh-cn',
};
