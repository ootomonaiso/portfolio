"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const BootScreen = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        return data.ip;
      } catch {
        return "Unknown";
      }
    };

    fetchIP().then((ip) => {
      const systemInfo = [
        "Booting System...",
        "Checking Hardware...",
        "Verifying User...",
        `IP Address: ${ip}`,
        `OS: ${navigator.platform}`,
        `Browser: ${navigator.userAgent.split(' ')[0]}`,
        "Status: Secure",
        "Press any key to continue...",
      ];

      systemInfo.forEach((log, index) => {
        setTimeout(() => {
          setLogs((prevLogs) => [...prevLogs, log]);
        }, index * 800);
      });

      setTimeout(() => {
        setLoading(false);
      }, systemInfo.length * 800 + 1000);
    });

    const handleKeyPress = () => {
      if (!loading) router.push("/home");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [loading, router]);

  return (
    <div className="h-screen bg-black text-green-500 font-mono p-5 flex items-center justify-center flex-col">
      {logs.map((log, index) => (
        <p key={index} className="animate-pulse text-lg">{log}</p>
      ))}
    </div>
  );
};

export default BootScreen;
