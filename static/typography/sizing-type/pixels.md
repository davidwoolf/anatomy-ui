Using pixel based `px` units for sizing is discouraged as they are considered inflexible compared to other units. They are also a lie. Considering that most computers and mobile devices now use 2x or 3x resolutions that up-sample values, setting your type to `14px` is never really 14 physical pixels.

At the same time, interfaces don't exist in the abstract, meaning the more popular `rem` unit is calculated from a base pixel size on the body element (`1rem` defaults to 16 virtual pixels). Still, avoid pixel values and opt for more flexible `rem` and `em` units for font size values as global text resizing can be applied by simple changing the body element’s pixel font size