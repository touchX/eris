/* Check if value is classified as a Date object.
 *
 * |Name  |Type   |Desc                          |
 * |------|-------|------------------------------|
 * |val   |*      |value to check                |
 * |return|boolean|True if value is a Date object|
 *
 * ```javascript
 * isDate(new Date()); // -> true
 * ```
 */

_('objToStr');

function exports(val)
{
    return objToStr(val) === '[object Date]';
}