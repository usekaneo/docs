interface OGImageProps {
	title: string;
}

export function createOGImage({ title }: OGImageProps) {
	return {
		type: "div",
		props: {
			style: {
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				backgroundColor: "#0A0A0A", // darker background
				backgroundImage:
					"radial-gradient(circle at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
				padding: "60px",
				fontFamily: "Noto Sans",
				position: "relative",
				overflow: "hidden",
			},
			children: [
				// Decorative grid background
				{
					type: "div",
					props: {
						style: {
							position: "absolute",
							inset: 0,
							backgroundImage:
								"linear-gradient(to right, rgba(129, 140, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(129, 140, 248, 0.05) 1px, transparent 1px)",
							backgroundSize: "64px 64px",
							maskImage:
								"radial-gradient(circle at 50% 50%, black, transparent)",
						},
					},
				},
				// Content container
				{
					type: "div",
					props: {
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "100%",
							position: "relative",
							zIndex: 1,
							gap: "40px",
						},
						children: [
							// Top section with logo
							{
								type: "div",
								props: {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "16px",
										background: "rgba(24, 24, 27, 0.7)",
										padding: "16px 24px",
										borderRadius: "16px",
										border: "1px solid rgba(129, 140, 248, 0.2)",
										boxShadow: "0 0 40px rgba(99, 102, 241, 0.1)",
										width: "auto",
										maxWidth: "300px",
									},
									children: [
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													padding: "10px",
													background:
														"linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
													borderRadius: "10px",
													boxShadow: "0 0 20px rgba(129, 140, 248, 0.3)",
												},
												children: [
													{
														type: "svg",
														props: {
															width: "24",
															height: "24",
															viewBox: "0 0 24 24",
															stroke: "white",
															strokeWidth: "2",
															strokeLinecap: "round",
															strokeLinejoin: "round",
															children: [
																{
																	type: "rect",
																	props: {
																		width: "7",
																		height: "7",
																		x: "3",
																		y: "3",
																		rx: "1",
																		fill: "none",
																	},
																},
																{
																	type: "rect",
																	props: {
																		width: "7",
																		height: "7",
																		x: "14",
																		y: "3",
																		rx: "1",
																		fill: "none",
																	},
																},
																{
																	type: "rect",
																	props: {
																		width: "7",
																		height: "7",
																		x: "14",
																		y: "14",
																		rx: "1",
																		fill: "none",
																	},
																},
																{
																	type: "rect",
																	props: {
																		width: "7",
																		height: "7",
																		x: "3",
																		y: "14",
																		rx: "1",
																		fill: "none",
																	},
																},
															],
														},
													},
												],
											},
										},
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "1px",
												},
												children: [
													{
														type: "span",
														props: {
															style: {
																fontSize: "24px",
																color: "#818CF8",
																fontWeight: 600,
																letterSpacing: "-0.02em",
															},
															children: "kaneo",
														},
													},
													{
														type: "span",
														props: {
															style: {
																fontSize: "24px",
																color: "#71717A",
																fontWeight: 500,
																letterSpacing: "-0.02em",
															},
															children: ".app",
														},
													},
												],
											},
										},
									],
								},
							},
							// Main content
							{
								type: "div",
								props: {
									style: {
										display: "flex",
										flexDirection: "column",
										gap: "32px",
										background: "rgba(24, 24, 27, 0.7)",
										padding: "48px",
										borderRadius: "24px",
										border: "1px solid rgba(129, 140, 248, 0.2)",
										boxShadow: "0 0 80px rgba(99, 102, 241, 0.1)",
									},
									children: [
										{
											type: "span",
											props: {
												style: {
													fontSize: "72px",
													background:
														"linear-gradient(135deg, #FFFFFF 0%, #818CF8 100%)",
													backgroundClip: "text",
													color: "transparent",
													fontWeight: 700,
													lineHeight: 1.1,
													letterSpacing: "-0.02em",
												},
												children: title,
											},
										},
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "8px",
													marginTop: "8px",
												},
												children: [
													{
														type: "span",
														props: {
															style: {
																fontSize: "24px",
																color: "#818CF8",
																fontWeight: 500,
															},
															children: "Project management",
														},
													},
													{
														type: "span",
														props: {
															style: {
																fontSize: "24px",
																color: "#71717A",
																fontWeight: 400,
															},
															children: "made simple for teams",
														},
													},
												],
											},
										},
									],
								},
							},
							// Bottom metadata section
							{
								type: "div",
								props: {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										background: "rgba(24, 24, 27, 0.7)",
										padding: "20px 32px",
										borderRadius: "16px",
										border: "1px solid rgba(129, 140, 248, 0.2)",
									},
									children: [
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													alignItems: "center",
													gap: "24px",
												},
												children: [
													{
														type: "div",
														props: {
															style: {
																display: "flex",
																alignItems: "center",
																gap: "8px",
															},
															children: [
																{
																	type: "span",
																	props: {
																		style: {
																			fontSize: "16px",
																			color: "#818CF8",
																			fontWeight: 500,
																		},
																		children: "Open Source",
																	},
																},
															],
														},
													},
													{
														type: "div",
														props: {
															style: {
																display: "flex",
																alignItems: "center",
																gap: "8px",
															},
															children: [
																{
																	type: "span",
																	props: {
																		style: {
																			fontSize: "16px",
																			color: "#71717A",
																		},
																		children: "•",
																	},
																},
																{
																	type: "span",
																	props: {
																		style: {
																			fontSize: "16px",
																			color: "#818CF8",
																			fontWeight: 500,
																		},
																		children: "Self-hosted",
																	},
																},
															],
														},
													},
													{
														type: "div",
														props: {
															style: {
																display: "flex",
																alignItems: "center",
																gap: "8px",
															},
															children: [
																{
																	type: "span",
																	props: {
																		style: {
																			fontSize: "16px",
																			color: "#71717A",
																		},
																		children: "•",
																	},
																},
																{
																	type: "span",
																	props: {
																		style: {
																			fontSize: "16px",
																			color: "#818CF8",
																			fontWeight: 500,
																		},
																		children: "MIT License",
																	},
																},
															],
														},
													},
												],
											},
										},
									],
								},
							},
						],
					},
				},
			],
		},
	};
}
