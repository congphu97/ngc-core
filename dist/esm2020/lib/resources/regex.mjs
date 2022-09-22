// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const REGEX = {
    NUMBER: /-?(?=.*[0-9])[0-9]*(?:\.[0-9]{1,})?$/,
    EMAIL: /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,4})$/,
    WEBSITE: /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}(\/.*)?/,
    CHARACTER: /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9ưƯơƠ ]*$/,
    PHONE: /^[0-9\(\)\-\+ ]*$/,
    EMOJI: /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+/,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3Jlc291cmNlcy9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwySkFBMko7QUFDM0osTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHO0lBQ3BCLE1BQU0sRUFBSSxzQ0FBc0M7SUFDaEQsS0FBSyxFQUFJLHVGQUF1RjtJQUNoRyxPQUFPLEVBQUksa0ZBQWtGO0lBQzdGLFNBQVMsRUFBRyxvQ0FBb0M7SUFDaEQsS0FBSyxFQUFJLG1CQUFtQjtJQUM1QixLQUFLLEVBQUkscUdBQXFHO0NBQ3JHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3R5cGVkZWYsIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSwgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZXhwb3J0IGNvbnN0IFJFR0VYID0ge1xuXHROVU1CRVJcdFx0OiAvLT8oPz0uKlswLTldKVswLTldKig/OlxcLlswLTldezEsfSk/JC8sXG5cdEVNQUlMXHRcdDogL15bX0EtWmEtejAtOS1cXCtdKyhcXC5bX0EtWmEtejAtOS1dKykqQFtBLVphLXowLTktXSsoXFwuW0EtWmEtejAtOV0rKSooXFwuW0EtWmEtel17Miw0fSkkLyxcblx0V0VCU0lURVx0XHQ6IC9eKGh0dHBbc10/OlxcL1xcLyl7MCwxfSh3d3dcXC4pezAsMX1bYS16QS1aMC05XFwuXFwtXStcXC5bYS16QS1aXXsyLDV9W1xcLl17MCwxfShcXC8uKik/Lyxcblx0Q0hBUkFDVEVSXHQ6IC9eW2EtekEtWsOALcOWw5ktw7bDuS3Dv8SALcW+4biALeG7vzAtOcawxq/GocagIF0qJC8sXG5cdFBIT05FXHRcdDogL15bMC05XFwoXFwpXFwtXFwrIF0qJC8sXG5cdEVNT0pJXHRcdDogL14oXFx1MDBhOXxcXHUwMGFlfFtcXHUyMDAwLVxcdTMzMDBdfFxcdWQ4M2NbXFx1ZDAwMC1cXHVkZmZmXXxcXHVkODNkW1xcdWQwMDAtXFx1ZGZmZl18XFx1ZDgzZVtcXHVkMDAwLVxcdWRmZmZdKSsvLFxufSBhcyBjb25zdDtcbiJdfQ==