// commitlint-parser.js
module.exports = function parse(message) {
    // 匹配带emoji的type格式：例如 "✨ feat(auth): 测试subject"
    const regex =
        /^(?<type>[\u2600-\u2B55\s\w]+?)(?:\((?<scope>[\w-]+)\))?:\s*(?<subject>.*)$/
    const match = message.match(regex)

    if (!match) {
        // 解析失败时返回空对象（触发默认错误）
        return { type: '', scope: '', subject: '' }
    }

    const { type, scope, subject } = match.groups
    return {
        type: type.trim(), // 提取type（包含emoji和文本）
        scope: scope || '', // 提取scope（可选）
        subject: subject.trim() || '', // 提取subject
        header: message,
        body: '',
        footer: ''
    }
}
