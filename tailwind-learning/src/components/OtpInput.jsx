import { useRef, useState } from "react";

const OTP_LENGTH = 6;

export default function OtpInput() {
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  // Handle typing
  const handleChange = (value, index) => {
    // Allow only numbers
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle keyboard events
  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case "Backspace":
        if (otp[index] === "" && index > 0) {
          inputRefs.current[index - 1].focus();
        }
        break;

      case "ArrowLeft":
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }
        break;

      case "ArrowRight":
        if (index < OTP_LENGTH - 1) {
          inputRefs.current[index + 1].focus();
        }
        break;

      default:
        break;
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, OTP_LENGTH);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];

    pastedData.split("").forEach((digit, index) => {
      newOtp[index] = digit;
    });

    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length - 1, OTP_LENGTH - 1);

    inputRefs.current[lastIndex].focus();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "80px",
      }}
    >
      <h2>Enter OTP</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            autoFocus={index === 0}
            style={{
              width: "55px",
              height: "55px",
              textAlign: "center",
              fontSize: "24px",
              border: "2px solid #888",
              borderRadius: "8px",
              outline: "none",
            }}
          />
        ))}
      </div>

      <h3>OTP: {otp.join("")}</h3>
    </div>
  );
}
