import verifyNewBlock from '../utils/verifiers/verifyNewBlock';
import { output } from '../helpers/output';

const initWork = block => Promise.all([verifyNewBlock(block)]);

export default block => {
  output("I'm doing some block work!");

  initWork(block).then(() => {
    output('init completed');
  });
};
