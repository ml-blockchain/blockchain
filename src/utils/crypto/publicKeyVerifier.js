/* https://gist.github.com/paranoiq/1932126 */
const regex = new RegExp('ssh-rsa AAAA[0-9A-Za-z+/]+[=]{0,3} ([^@]+@[^@]+)');

export default key => regex.test(key);
