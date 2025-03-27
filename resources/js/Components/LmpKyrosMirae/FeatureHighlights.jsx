import { Card, CardContent } from "../ui/card";
import { Brain, AlertTriangle, Zap, BarChart4 } from "lucide-react";

export default function FeatureHighlights() {
    return (
        <section className="container px-4 md:px-6 xl:px-0 max-w-[1200px] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">01</h3>
                            <h4 className="font-semibold mb-2">Reliable AI</h4>
                            <p className="text-sm text-muted-foreground">
                                AIGC generated highly accurate, high veracity
                                operations data enabling reliable AI.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4">
                                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">02</h3>
                            <h4 className="font-semibold mb-2">Risk-Aware</h4>
                            <p className="text-sm text-muted-foreground">
                                AI recommendations first validated by high
                                fidelity digital twin for risk & outcome
                                assessment before action.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                                <Zap className="h-6 w-6 text-green-600 dark:text-green-300" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">03</h3>
                            <h4 className="font-semibold mb-2">
                                Quick Outcomes
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                Tangible outcomes within short period of time
                                after solution deployment.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                                <BarChart4 className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                            </div>
                            <h3 className="text-3xl font-bold mb-2">04</h3>
                            <h4 className="font-semibold mb-2">Future Ready</h4>
                            <p className="text-sm text-muted-foreground">
                                Through CDT driven, comprehensive optimization,
                                the platform enables full range and full
                                lifecycle sustainability.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
